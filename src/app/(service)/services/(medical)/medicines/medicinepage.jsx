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
import heartimage from './assets/heart4.png'
import lungsimage from "./assets/lungs.png"
import kidneyimage from './assets/kidney2.png'
import skincare from './assets/skincare.png'
import musthave from "./assets/musthave.png"
import Elderly from './assets/elderly.png'

import banner5 from './assets/banner5.png'
import banner6 from "./assets/banner6.png"
import banner7 from './assets/banner7.png'
import banner8 from './assets/banner8.png'

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import Autoplay from "embla-carousel-autoplay"
import { MdMyLocation } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function Content() 
{
  //<Link href='/services/medicines/medicinelist/?category=Heart'></Link>
  return (
    <div>

    <div className="flex max-w-xl items-center space-x-2 mb-14 mt-10 container justify-end object-cover">
      <Button type="submit"><MdMyLocation />Location</Button>
      <Input type="email" placeholder="Search your medicine" />
      <Button type="submit">Submit</Button>
    </div>
    
    <div className="ml-2 py-5 px-20">
        <h2 className="text-3xl font-bold leading-none">Shop By Concern </h2>
        <p className="text-lg text-muted-foreground">
        Caring makes the difference.
        </p>
    </div>
    
    <div className="flex gap-4 ml-52"> 
    <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={heartimage} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>Heart</CardTitle>
              <CardDescription>Love is heart</CardDescription>
              <div>
              <Link href='/services/medicines/medicinelist/?category=Heart'><Button className="w-full">Click here</Button></Link>
              </div>
              
            </CardHeader>
          </Card>
      </div>

      <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={lungsimage} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>Lungs</CardTitle>
              <CardDescription>Love is heart</CardDescription>
              <div>
              <Link href='/services/medicines/medicinelist/?category=Lungs'><Button className="w-full">Click here</Button></Link>
              </div>
              
            </CardHeader>
          </Card>
      </div>

      <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={kidneyimage} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>Kidney</CardTitle>
              <CardDescription>Love is heart</CardDescription>
              <div>
              <Link href='/services/medicines/medicinelist/?category=Kidney'><Button className="w-full">Click here</Button></Link>
              </div>
              
            </CardHeader>
          </Card>
      </div>
      </div>

    

    
        <Carousel className='mb-20'
          plugins={[
            Autoplay({
              delay: 2300,
            }),
          ]}
        >
          <CarouselContent className="">
            <CarouselItem className="flex items-center justify-center"><Image src={banner5} height="100" width="1300" alt="banner1"></Image></CarouselItem>
            <CarouselItem className="flex items-center justify-center"><Image src={banner6} height="100" width="1300" alt="banner1"></Image></CarouselItem>
            <CarouselItem className="flex items-center justify-center"><Image src={banner7} height="100" width="1300" alt="banner1"></Image></CarouselItem>
            <CarouselItem className="flex items-center justify-center"><Image src={banner8} height="100" width="1300" alt="banner1"></Image></CarouselItem>
          </CarouselContent>
        </Carousel>
     
   
     <div className="ml-2 py-5 px-20 mb-5">
        <h2 className="text-3xl font-bold leading-none">Shop By Category </h2>
        <p className="text-lg text-muted-foreground">
        Find it fast.
        </p>
    </div>

    <div className="flex gap-4 ml-52"> 
    <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={musthave} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>MustHaves</CardTitle>
              <CardDescription>Love is heart</CardDescription>
              <div>
              <Link href='/services/medicines/medicinelist/?category=MustHaves'><Button className="w-full">Click here</Button></Link>
              </div>
              
            </CardHeader>
          </Card>
      </div>

      <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={skincare} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>Skin Care</CardTitle>
              <CardDescription>Love is heart</CardDescription>
              <div>
              <Link href='/services/medicines/medicinelist/?category=SkinCare'><Button className="w-full">Click here</Button></Link>
              </div>
              
            </CardHeader>
          </Card>
      </div>

      <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={Elderly} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>Elderly People</CardTitle>
              <CardDescription>Love is heart</CardDescription>
              <div>
              <Link href='/services/medicines/medicinelist/?category=ElderlyPeople'><Button className="w-full">Click here</Button></Link>
              </div>
              
            </CardHeader>
          </Card>
      </div>
      </div>

    
    </div>
  )
}