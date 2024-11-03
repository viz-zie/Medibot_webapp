'use client'
import axios from "axios"
import Link from "next/link"
import React,{useEffect,useState} from "react"
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
import Image from "next/image"

import authorize from './assets/emailverificationimg3.png'
import noauthorize from './assets/emailverificationimg4.png'



export default function VerifyEmailPage()
{

    const [token,setToken] = useState("");
    const[verified,setVerified]=useState(false);
    const [error,setError] = useState(false);

    const verifyUserEmail = async () => {
        try 
        {
            await axios.post('/api/users/verifyemail',{token})

            setVerified(true);
        } 
        catch (error) 
        {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    },[]);

    useEffect(() => {
        if (token.length >0)
        {
            verifyUserEmail();
        }

    },[token]);


    
    return (
        <div>
        <main className="flex max-h-screen flex-col items-center justify-between p-24 ">

        
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Email Verification</CardTitle>
                <CardDescription>Get verified in jiffy</CardDescription>
                <CardDescription>{token ? `${token}` : "no token"}</CardDescription>
            </CardHeader>

        {verified && (
            <div>
            <CardContent>
            <form>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <Image src={authorize} width={400}></Image>
                </div>
            </div>
            </form>
            </CardContent>


            <CardFooter className="flex justify-between">
                <Link href='/'><Button variant="outline">Cancel</Button></Link>
                <Link href='/'><Button>Login</Button></Link>
            </CardFooter>
            </div>
        )}

        {error && (
            <div>
            <CardContent>
            <form>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <Image src={noauthorize} width={400}></Image>
                </div>
            </div>
            </form>
            </CardContent>
            </div>
        )}
        </Card>
        
        

        


        </main>
        </div>
        
    )
}