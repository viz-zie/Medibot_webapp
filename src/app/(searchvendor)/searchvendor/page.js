
'use client'
import React from "react"
import { useState,useEffect } from "react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
//import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "@/components/ui/card";
import vishphoto2 from '@/app/(about)/aboutus/assets/vishphoto2.jpg'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import LocationPage from "./location";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";


export default function searchvendor()
{
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [quotationrequest, setQuotationrequest] = useState([]);

    const [custId, setCustId] = useState(null);
    
    useEffect(() => {
      // Get the token from cookies
      const token = Cookies.get('token');
      if (token) {
        try {
          // Decode the token to get the user's role
          const decoded = jwtDecode(token);
          setCustId(decoded.id); // Set the user's role in state
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }, []);
  
  
    // Fetch vendor details when the page loads
    useEffect(() => {
      const fetchVendors = async () => {
        try {
          const response = await fetch('/api/users/getUserByVendorRole'); // Replace with your actual API endpoint
          if (!response.ok) throw new Error('Failed to fetch vendors');
          const data = await response.json();
          setVendors(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchVendors();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    
    // Handler to toggle vendor selection
    const toggleVendorSelection = (id) => {
      setSelectedVendors(prevSelected => {
          console.log("Before Update:", prevSelected);
          const isSelected = prevSelected.includes(id);
          const newSelected = isSelected ? prevSelected.filter(prevId => prevId !== id) : [...prevSelected, id];
          console.log("After Update:", newSelected);
          return newSelected;
      });
  };

  console.log(selectedVendors);

  const getQuotefromVendors = async (custid,selectedVendors) => {
    try 
    {
// Clear any existing error messages

        const quotationdata = {
          vendId: selectedVendors     
        };
        const res = await fetch(`/api/quotations/postQuotations?quoterequieredcustomer=${custId}`,
          {
          method: 'POST', // Specify POST method
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(quotationdata), // Send data in the request body
        })
        const data = await res.json();
        console.log("after post")
        setQuotationrequest(data);

       // console.log("on click of quote ",quotationrequest)

        
    } 
    catch (error) 
    {
        console.log("you got an error");
    }
  }


  
  
  
  
    return (

        <div>
        
        <main className="flex max-h-screen flex-col items-center justify-between  ">
        <div className=" flex justify-center items-center gap-4 m-5">
        <LocationPage/>
        </div>
        <div>
          
        </div>
        <div className="m-3">
          <h1>Matching Associated Vendors</h1>
        </div>
        <div className="rounded-md border m-5">
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Sno</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Latitude</TableHead>
                <TableHead>Longitude</TableHead>
                <TableHead>Select</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {vendors.map((vendor, index) => (
                <TableRow key={vendor._id}>
                    <TableCell>{index + 1}</TableCell> {/* Serial Number */}
                    <TableCell>{vendor.username}</TableCell>
                    <TableCell>{vendor.email}</TableCell>
                    <TableCell>{vendor.address}</TableCell>
                    <TableCell>{vendor.latitude}</TableCell>
                    <TableCell>{vendor.longitude}</TableCell>
                    <TableCell>
                    <input
                        type="checkbox"
                        checked={selectedVendors.includes(vendor._id)}
                        onChange={() => toggleVendorSelection(vendor._id)}
                        aria-label={`Select ${vendor.username}`}
                    /> {/* Checkbox */}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        

    
        </div>
        <Button onClick={() => getQuotefromVendors(custId,selectedVendors)}>Get Quote</Button>
        
      </main>
      </div>
      
    );
  }