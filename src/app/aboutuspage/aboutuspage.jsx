// src/AboutUs.js

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import vishphoto1 from './assets/vishphoto1.jpg'
import vishphoto2 from "@/app/aboutuspage/assets/vishphoto2.jpg"


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
    
    <div className="min-h-screen  py-12">
      {/* Hero Section */}
      

      {/* Team Section */}
      <div className="container mx-auto px-4 mt-12">
        <h1 as="h2" size="xl" className="text-center  mb-8">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="p-6  shadow-md rounded-lg text-center">
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
