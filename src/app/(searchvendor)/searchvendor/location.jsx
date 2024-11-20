import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Image from 'next/image';
const LocationPage = () => {
  const [locationData, setLocationData] = useState({
    ip: null,
    latitude: null,
    longitude: null,
  });
  const [shops, setShops] = useState([]);
  const [mapImageUrl, setMapImageUrl] = useState('');
  const [error, setError] = useState(null);

  const apiKey = '7a09a48885324b20bbbfcbc5412adda9'; // Your Geoapify API key

  // Function to fetch IP and geolocation
  const fetchLocationData = async () => {
    try {
      // Fetch IP address
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      setLocationData(prev => ({ ...prev, ip: ipData.ip }));

      // Fetch geolocation
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          setLocationData(prev => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude

          }));

          // Fetch shops and update map once geolocation is obtained
          await findShopsAndUpdateMap(position.coords.latitude, position.coords.longitude);
        }, (error) => {
          setError("Error getting location: " + error.message);
          console.error("Error Code = " + error.code + " - " + error.message);
        });
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      setError("Failed to fetch location data: " + error.message);
      console.error("Error fetching IP:", error);
    }
  };

  

  // Function to fetch shops based on location and update map
  const findShopsAndUpdateMap = async (latitude, longitude) => {
    const category = 'healthcare.pharmacy'; // Category for medical shops
    const radius = 10000; // Radius in meters

    try {
      const response = await fetch(`https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${longitude},${latitude},${radius}&bias=proximity:${longitude},${latitude}&limit=20&apiKey=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch medical shops');
      }
      const data = await response.json();
      setShops(data.features); // Assuming Geoapify returns "features" array

      // Update map image
      updateMapImage(data.features, latitude, longitude);
    } catch (error) {
      setError("Failed to fetch shops: " + error.message);
      console.error('Error fetching shops:', error);
    }
  };

  // Generate static map URL with markers
  // https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:-122.304378,47.526022&zoom=14&scaleFactor=2&apiKey=0e20278134924375a4a753bf6e07542f

  const updateMapImage = (features, latitude, longitude) => {
    const markers = features.map((shop, index) => `pin-l-${index+1}(${shop.properties.lon},${shop.properties.lat})`).join('&');
    const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${longitude},${latitude}&zoom=14&marker=lonlat:${longitude},${latitude};color:%23ff0000;size:medium&apiKey=${apiKey}`;
    setMapImageUrl(mapUrl);
  };

/*
  const updateMapImage = (features) => {
    const markers = features.map((feature, index) =>
      `pin-l-${index+1}(${feature.properties.lon},${feature.properties.lat})`
    ).join('&');

    const center = features.length > 0
      ? `${features[0].properties.lon},${features[0].properties.lat}`
      : '0,0'; // Default center if no features

    const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=800&height=400&center=lonlat:${center}&zoom=12&${markers}&apiKey=${apiKey}`;
    setMapImageUrl(mapUrl);
  };
*/

  useEffect(() => {
    fetchLocationData();
  }, []);

  return (
    <div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {mapImageUrl && <Image src={mapImageUrl} width={500} height={500}alt="Map of Nearby Shops" />}
      {shops.length > 0 && (
        <div className='m-5'>
          <h2>Nearby Medical Shops</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Sno</TableCell>
                <TableCell>Name</TableCell>
                
                <TableCell>Address</TableCell>
                <TableCell>Latitude</TableCell>
                <TableCell>Longitude</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shops.map((shop, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{shop.properties.name}</TableCell>
                  
                  <TableCell>{shop.properties.formatted}</TableCell>
                  <TableCell>{shop.properties.lat}</TableCell>
                  <TableCell>{shop.properties.lon}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
