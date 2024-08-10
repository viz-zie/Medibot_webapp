import * as React from "react"

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
import heartimage from './assets/heart.png'
import lungsimage from "./assets/lungs.png"
import kidneyimage from './assets/kidney.png'
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

export function Content() {
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
    
    <div className="flex gap-4 justify-center mb-20">
    <Card className="w-[350px] border-white" >
    <CardContent>
    <Image src={heartimage} height="50" width="200"></Image>
    </CardContent>
      <CardHeader>
        <CardTitle>Heart Based</CardTitle>
        <CardDescription>Strong heart, strong you. </CardDescription>
        <Button>View</Button>
      </CardHeader>
    </Card>

    <Card className="w-[350px]">
    <CardContent>
    <Image src={lungsimage} height="50" width="238"></Image>
    </CardContent>
      <CardHeader>
        <CardTitle>Lungs Based</CardTitle>
        <CardDescription>Breathe freely, live fully</CardDescription>
        <Button>View</Button>
      </CardHeader>
    </Card>
    

    <Card className="w-[350px]">
    <CardContent>
    <Image src={kidneyimage} height ="50" width="266"></Image>
    </CardContent>
      <CardHeader className="mt-8">
        <CardTitle>Kidney Based</CardTitle>
        <CardDescription>Cherish your kidneys.</CardDescription>
        <Button>View </Button>
      </CardHeader>
    </Card>
    </div>

    

    
        <Carousel className='mb-20'
          plugins={[
            Autoplay({
              delay: 2300,
            }),
          ]}
        >
          <CarouselContent className="">
            <CarouselItem className="flex items-center justify-center"><Image src={banner5} height="100" width="1300"></Image></CarouselItem>
            <CarouselItem className="flex items-center justify-center"><Image src={banner6} height="100" width="1300"></Image></CarouselItem>
            <CarouselItem className="flex items-center justify-center"><Image src={banner7} height="100" width="1300"></Image></CarouselItem>
            <CarouselItem className="flex items-center justify-center"><Image src={banner8} height="100" width="1300"></Image></CarouselItem>
          </CarouselContent>
        </Carousel>
     
   
     <div className="ml-2 py-5 px-20 mb-5">
        <h2 className="text-3xl font-bold leading-none">Shop By Category </h2>
        <p className="text-lg text-muted-foreground">
        Find it fast.
        </p>
    </div>

    <div className="object-cover">
    <div className="flex gap-4 justify-center mb-20   ">

      <Card className="w-[350px] transform  rounded-xl transition duration-300 hover:scale-105">
      <CardContent>
      <Image src={musthave} height ="50" width="266"></Image>
      </CardContent>
        <CardHeader className="mt-3">
          <CardTitle>Must Haves</CardTitle>
          <CardDescription>Essential care, always ready. </CardDescription>
          <Button>View </Button>
        </CardHeader>
      </Card>

      <Card className="w-[350px] transform  rounded-xl transition duration-300 hover:scale-105">
      <CardContent>
      <Image src={skincare} height ="50" width="266"></Image>
      </CardContent>
        <CardHeader className="mt-3">
          <CardTitle>Skin Care</CardTitle>
          <CardDescription>Reveal your skin's true potential. </CardDescription>
          <Button>View </Button>
        </CardHeader>
      </Card>

      <Card className="w-[350px] transform  rounded-xl transition duration-300 hover:scale-105">
      <CardContent>
      <Image src={Elderly} height ="50" width="266"></Image>
      </CardContent>
        <CardHeader className="mt-3">
          <CardTitle>Elderly Care</CardTitle>
          <CardDescription>Your golden years, our priority</CardDescription>
          <Button>View </Button>
        </CardHeader>
      </Card>
    </div>
    </div>
    </div>
  )
}