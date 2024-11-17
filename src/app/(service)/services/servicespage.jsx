import * as React from "react"
import Link from "next/link"
import { useState,useEffect } from "react"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
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
import details from "./servicesdetails"
import Image from "next/image"

export function CardServices(props) 
{
  const [role, setRole] = useState(null);
    const [id, setId] = useState(null);
    
    useEffect(() => {
      // Get the token from cookies
      const token = Cookies.get('token');
      if (token) {
        try {
          // Decode the token to get the user's role
          const decoded = jwtDecode(token);
          setRole(decoded.role);
          setId(decoded.id); // Set the user's role in state
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }, []);
    const path = usePathname();
  return (
    
        <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={props.imgurl} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>{props.title}</CardTitle>
              
              
              {role === 'Vendor' || role === 'Customer' ? (
              <>
              <div>
                <CardDescription className='mb-3'>{props.description}</CardDescription>
                <Link href={props.link}><Button className="w-full">Click here</Button></Link>
              </div>
              </>
              ) : (
              <CardDescription>{props.description}</CardDescription>
            )}
              
            </CardHeader>
          </Card>
        </div>
    
  )
}
