// src/AboutUs.js

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import vishphoto1 from './assets/vishphoto1.jpg'

import Image from 'next/image';
// Sample team member data
const teamMembers = [
  {
    name: 'Vishranth Karthikheyan',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Nitin Pranav ',
    role: 'Founder & CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Harshad Subramaniam',
    role: 'Founder & COO',
    image: 'https://via.placeholder.com/150',
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
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6  shadow-md rounded-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                size="lg"
                className="mx-auto mb-4 rounded-full"
              />
              <h1 as="h3" size="lg" className=" mb-2">
                {member.name}
              </h1>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <Button className=" text-white  ">
                View Profile
              </Button>
            </Card>
          ))}
        </div>
      </div>

      
      
    </div>
  );
};

export default AboutUs;
