'use client'
import addtocart from './assets/addtocart.png'
import { Button } from '@/components/ui/button';
//import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"; // Adjust based on your imports
import react from '@heroicons/react';
import mongoose from 'mongoose';
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

export default function DrugList()
{
    console.log("i am inside Druglist")
    const [Filtereddrugs, setDrugs] = useState([]);
    const [error, setError] = useState(null);
    const [headingvalue,setHeadingValue] = useState();    
    const [counts, setCounts] = useState([]);

    console.log(Filtereddrugs);

 

    // Increment function
    const increment = (id) => {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [id]: (prevCounts[id] || 0) + 1,
      }));
    };
  
    // Decrement function (optional)
    const decrement = (id) => {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [id]: Math.max((prevCounts[id] || 0) - 1, 0), // Ensuring it doesn't go below zero
      }));
    };
    

    const fetchDrugs = async (categoryvalue) => {
        try 
        {
            const res = await fetch(`/api/drugs/getDrugs?category=${categoryvalue}`)
            const data = await res.json();
            setDrugs(data);
        } 
        catch (error) 
        {
            console.log("you got an error");
        }
    }
    const addmedicinetocart = async (customerId,itemId,quantity) => 
    {
        console.log(customerId,itemId,quantity);

        const objcustomerId = new mongoose.Types.ObjectId(customerId);
        const objitemId = new  mongoose.Types.ObjectId(itemId);

        const orderData = {
            customerId: objcustomerId,
            itemId: objitemId,
            qty: quantity,
            orderStatus: "pending",
          };

          console.log(orderData);

          fetch('/api/orders/postOrders', 
            {
            method: 'POST', // Specify POST method
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData), // Send data in the request body
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => console.log('Order posted:', data))
            .catch((error) => console.error('There was a problem with the fetch operation:', error));
       
            
    }



    useEffect(() => {       
            
        
            const urlParams = new URLSearchParams(window.location.search);
            const categoryvalue = urlParams.get('category');
            setHeadingValue(categoryvalue)
            if(categoryvalue)
            {
                fetchDrugs(categoryvalue);
            }
            //headingvalue = categoryvalue;
        
    }, []);

    
    const [id, setId] = useState(null);
    
    useEffect(() => {
      // Get the token from cookies
      const token = Cookies.get('token');
      if (token) {
        try {
          // Decode the token to get the user's role
          const decoded = jwtDecode(token);
          
          setId(decoded.id); // Set the user's role in state
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }, []);
    const path = usePathname();

    


    
    return(
    <div>
    
        {/* <pre>{JSON.stringify(Filtereddrugs, null, 2)}</pre>*/}
     
    
        <div className="flex items-center justify-center">
            <h4 className="text-3xl font-bold leading-none mt-10" >{headingvalue} Based Medicines</h4>
        </div>
        <div className='flex items-center justify-center'>
            <p className="text-sm text-muted-foreground">Service is what life is all about</p>
        </div>

        {error && <p>Error: {error}</p>}

    
        <div className="flex flex-col items-center justify-center min-h-screen mt-28 ml-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {Array.isArray(Filtereddrugs) && Filtereddrugs.length > 0 ? (
                    Filtereddrugs.map((drug) => (
                        <Card key={drug._id} className="w-[350px] transform  rounded-xl transition duration-300 hover:scale-105">
                            <CardContent>
                                <img src={drug.ImageURL} alt={drug.DrugName} width={200} height={200} className="object-cover rounded" />
                                <CardHeader>
                                    <CardTitle>{drug.DrugName}</CardTitle>
                                    <CardDescription>Dosage: {drug.Dosage}</CardDescription>
                                    <CardDescription>ID: {drug._id}</CardDescription>
                                    <CardDescription>Manufacturer: {drug.Manufacturer}</CardDescription>
                                </CardHeader>
                                <CardFooter className='flex gap-2'>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-0 rounded-full"
                                    onClick={() => decrement(drug._id)}
                                >
                                    <MinusIcon className="h-4 w-4" />
                                    <span className="sr-only">Decrease</span>
                                </Button>

                                <Label>{counts[drug._id] || 0}</Label>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-0 rounded-full"
                                    onClick={() => increment(drug._id)}

                                >
                                    <PlusIcon className="h-4 w-4" />
                                    <span className="sr-only">Increase</span>
                                </Button>
                                
                                <Button
                                    variant="default"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={() => addmedicinetocart({id},drug._id,counts[drug._id])}                                                                
                                    //onClick={() => console.log('Button clicked')}
                                >
                            
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">add to cart</span>
                                </Button>
                                
                                {/*/api/orders/postOrders?itemId=${drug._id}`*/}

                                </CardFooter>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p>No drugs available.</p>
                )}
            </div>
        </div>
    
    </div>
    
    )
    
    
}