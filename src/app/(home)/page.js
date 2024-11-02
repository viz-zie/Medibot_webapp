'use client'
import React from 'react'
import { SeparatorDemo } from "@/components/ui/contentseparatorleft";

import Lottie from "lottie-react";
import { Button } from '@/components/ui/button';

import mainpic from './assets/doctor3.png'
import Image from 'next/image';

import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home() {

  return (
    
    <div >
      <div className="flex  p-20 m-20">
        <div className='flex-wrap w-1/2 justify-center items-start content-center'>
          <SeparatorDemo/>
        </div>
        <div className='flex-wrap w-1/2 justify-center transform  rounded-xl transition duration-300 hover:scale-105'>
          {/*<Lottie animationData={animationData} className='w-full h-full'></Lottie>*/}
          <Image src={mainpic} alt="mainpic"></Image>
        </div>
        
      </div>
    
   
    
    </div>
  );
}
