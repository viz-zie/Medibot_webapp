
'use client'
import React from "react"
import { useState,useEffect } from "react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
//import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "@/components/ui/card";
import vishphoto2 from '@/app/(about)/aboutus/assets/vishphoto2.jpg'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
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
export default function searchvendor()
{
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
  
    return (

        <div>

        

        
        <main className="flex max-h-screen flex-col items-center justify-between p-8 ">
        <div className=" flex justify-center items-center gap-4">
            <div className="flex justify-center" style={{ width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden' }} >
                {/*<Image src={vishphoto2} width={400} height={400} className="rounded-full"></Image>*/}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.806290366249!2d80.18242507482074!3d13.047998813199259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613306b96323%3A0xb41f2be500c87f40!2s196%2C%20Agathiyar%20St%2C%20Thirumalai%20Nagar%2C%20Alwartirunagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e0!3m2!1sen!2sin!4v1731862784832!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                ></iframe>
            </div>
            <div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>API Parameters</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                            <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
            </div>
        </div>
        <div className="rounded-md border m-5">
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>SNO</TableHead>
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
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell> {/* Serial Number */}
                    <TableCell>{vendor.username}</TableCell>
                    <TableCell>{vendor.email}</TableCell>
                    <TableCell>{vendor.address}</TableCell>
                    <TableCell>{vendor.latitude}</TableCell>
                    <TableCell>{vendor.longitude}</TableCell>
                    <TableCell>
                    <Checkbox aria-label={`Select ${vendor.username}`} /> {/* Checkbox */}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        

    
        </div>
        <Button>Get Quote</Button>
        
      </main>
      </div>
      
    );
  }