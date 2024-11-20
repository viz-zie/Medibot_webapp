import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const LocationPage = () => {
  const [locationData, setLocationData] = useState({
    ip: null,
    latitude: null,
    longitude: null,
    city: null,
    country: null,
  });
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);

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

          // Fetch shops once geolocation is obtained
          await findShops(position.coords.latitude, position.coords.longitude);
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

  // Function to fetch shops based on location
  const findShops = async (latitude, longitude) => {
    const apiKey = '7a09a48885324b20bbbfcbc5412adda9'; // Replace with your Geoapify API key
    const category = 'healthcare.pharmacy'; // Category for medical shops
    const radius = 2000; // Radius in meters

    try {
      const response = await fetch(`https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${longitude},${latitude},${radius}&bias=proximity:${longitude},${latitude}&limit=5&apiKey=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch medical shops');
      }
      const data = await response.json();
      setShops(data.features); // Assuming Geoapify returns "features" array

    } catch (error) {
      setError("Failed to fetch shops: " + error.message);
      console.error('Error fetching shops:', error);
    }
  };

  return (
    <div>
      <Button className='mt-5' onClick={fetchLocationData}>Fetch Location and Find Shops</Button>
      {/*
      <div>
      
        <h1>Your Location Info</h1>
        <p>IP: {locationData.ip}</p>
        <p>Location: {locationData.city} {locationData.country}</p>
        <p>Latitude: {locationData.latitude}</p>
        <p>Longitude: {locationData.longitude}</p>
      </div>
      */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {shops.length > 0 && (
        <div className='m-5 '>
          <h2>Nearby Medical Shops</h2>
        
      
        <div className="rounded-md border m-5">
          
          
         
          <Table >
            <TableHeader>
                <TableRow>
                <TableHead>Sno</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Area</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Latitude</TableHead>
                <TableHead>Longitude</TableHead>
                
                
                
                </TableRow>
            </TableHeader>
            <TableBody>
                {shops.map((shop, index) => (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell> {/* Serial Number */}
                    <TableCell>{shop.properties.name}</TableCell>
                    <TableCell>{shop.properties.county}</TableCell>
                    <TableCell>{shop.properties.formatted}</TableCell>
                    <TableCell>{shop.properties.lat}</TableCell>
                    <TableCell>{shop.properties.lon}</TableCell>
                    
                    
                    
                </TableRow>
                ))}
            </TableBody>
        </Table>
       
        </div>
        </div>
      
      )}
    </div>
  );
};

export default LocationPage;
