import * as React from "react"
import Link from "next/link"
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
import deliveryimage from '../assets/delivery1.png'
import petsimage from "../assets/pets.png"
import labtestimage from '../assets/labtests.png'

export function CardServices() {
  return (
    <div className="flex gap-4 ">
    <Card className="w-[350px] transform  rounded-xl transition duration-300 hover:scale-105" >
    <CardContent>
    <Image src={deliveryimage} height="100" width="400" alt="delivery"></Image>
    </CardContent>
      <CardHeader>
        <CardTitle>Medicine Delivery</CardTitle>
        <CardDescription>Free delivery within 10 minutes from your nearest store </CardDescription>
        <Link href='./medicinepage'><Button className='w-full' >Click here </Button></Link>
      </CardHeader>
    </Card>

    <Card className="w-[350px] transform border-white rounded-xl transition duration-300 hover:scale-105">
    <CardContent>
    <Image src={petsimage} height="100" width="400" alt="dog"></Image>
    </CardContent>
      <CardHeader>
        <CardTitle>Pet Services</CardTitle>
        <CardDescription>Doorstep pet service which includes spa and other treatments</CardDescription>
        <Button>Click here </Button>
      </CardHeader>
    </Card>
    

    <Card className="w-[350px] transform  rounded-xl  transition duration-300 hover:scale-105">
    <CardContent>
    <Image src={labtestimage} height="100" width="400" alt="labtest"></Image>
    </CardContent>
      <CardHeader>
        <CardTitle>Lab Tests</CardTitle>
        <CardDescription>Great offers on lab tests all over India for various diseases</CardDescription>
        <Button>Click here </Button>
      </CardHeader>
    </Card>
    
    
    </div>
    
  )
}
