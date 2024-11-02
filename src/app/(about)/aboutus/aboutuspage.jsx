// src/AboutUs.js

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import vishphoto1 from './assets/vishphoto1.jpg'
import vishphoto2 from "./assets/vishphoto2.jpg"


import Image from 'next/image';
// Sample team member data
const teamMembers = [
  {
    id:1,
    name: 'Vishranth Karthikheyan',
    role: 'Founder & CEO',
    src: vishphoto2,
    link : 'https://viz-zie.github.io/MyPortfolio/',
  },
  {
    id:2,
    name: 'Nitin Pranav ',
    role: 'Founder & CTO',
    src: vishphoto2,
    link : 'https://viz-zie.github.io/MyPortfolio/',
  },
  {
    id:3,
    name: 'Harshad Subramaniam',
    role: 'Founder & COO',
    src: vishphoto2,
    link : 'https://viz-zie.github.io/MyPortfolio/',
    
  },
];

const AboutUs = () => {
  return (
    
    <div className="min-h-screen ">
      {/* Hero Section */}
      

      {/* Team Section */}
      <div className="container mx-auto  ">
        <div className="flex items-center justify-center">
          <h4 className="text-3xl font-bold leading-none " >Meet Our Team</h4>
        </div>
        <div className='flex items-center justify-center mb-10'>
          <p className="text-sm text-muted-foreground">The Pillars of Medisoter</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <Card key={member.id} className="p-6   rounded-lg text-center">
              <Image
                
                src={member.src}
                alt={member.name}
                width={300}
                
                className="mx-auto mb-4 rounded-full"
              />
              <h1 as="h3" size="lg" className=" mb-2">
                {member.name}
              </h1>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <Button className=" text-white  ">
              <a href={member.link}>View Profile</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>

      
      
    </div>
  );
};

export default AboutUs;
