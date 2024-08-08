'use client'
import React from 'react'
import { SeparatorDemo } from "@/components/ui/contentseparatorleft";
import animationData from '../assets/dochomepage'
import Lottie from "lottie-react";
import { Button } from '@/components/ui/button';
import { CardServices } from '@/components/ui/Servicescard';

import mainpic from '../assets/doctor3.png'
import Image from 'next/image';


export default function Home() {
  return (
    
    <div >
      <div className="flex  p-20 m-20">
        <div className='flex-wrap w-1/2 justify-center items-start content-center'>
          <SeparatorDemo/>
        </div>
        <div className='flex-wrap w-1/2 justify-center'>
          {/*<Lottie animationData={animationData} className='w-full h-full'></Lottie>*/}
          <Image src={mainpic} alt="mainpic"></Image>
        </div>
        
      </div>
    <div>
    <div className=''>
        <div className="flex items-center justify-center" id="serviceSection">
        <h4 className="text-3xl font-bold leading-none mt-20" >Services We Offer</h4>
        </div>
        <div className='flex items-center justify-center'>
        <p className="text-sm text-muted-foreground">Service is what life is all about</p>
        </div>
    </div>
    </div>

    <div className='flex p-20 gap-4 justify-center'  >
    <CardServices/>
    </div>
   
    
    </div>
  );
}
