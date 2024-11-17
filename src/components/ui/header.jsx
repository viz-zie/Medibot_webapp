'use client'
import Lottie from 'lottie-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from "@/components/ui/toggle"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"

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
  
import { SheetDemo } from '@/components/ui/sidenotificationbar'
import Addtocartbar from './addtocartsidebar'
import { DrawerDemo } from '@/components/ui/chatbotpage'
import Image from 'next/image'
import headericon from '@/components/assets/headerlogo6.png'
import { usePathname } from 'next/navigation'
import classes from './header.module.css'
import { Toaster } from "@/components/ui/sonner"
 
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

  export default function MenubarDemo() 
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
      <div>

      <Menubar className="p-8 w-full align-center  ">
      <div className='flex w-1/2 sm'>
        <MenubarMenu>
          <MenubarMenu>
          {/*<Lottie animationData={animationdata} className='w-10 h-10'></Lottie>*/}
          <Image src={headericon} width={40} height={40} alt='mainlogo'></Image>
          </MenubarMenu>

          <MenubarMenu>
          <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger><Link href="/services" className={path.startsWith('/services')? classes.active:undefined}>Services</Link></MenubarTrigger>
          </MenubarMenu>

          {role === 'Customer' && (
          <>
          <MenubarMenu>
          <MenubarTrigger><Link href={`/dashboardcust?custid=${id}`} className={path.startsWith('/dashboardcust')? classes.active:undefined} >My Dashboard</Link></MenubarTrigger>
          </MenubarMenu>
          </>
          )}

          {role === 'Vendor' && (
            <>
            <MenubarMenu>
            <MenubarTrigger><Link href={`/dashboardvend?vendid=${id}`} className={path.startsWith('/dashboardvend')? classes.active:undefined} >My Dashboard</Link></MenubarTrigger>
            </MenubarMenu>
            </>
          )}

          <MenubarMenu>
          <MenubarTrigger><Link href="/aboutus" className={path.startsWith('/aboutus')? classes.active:undefined}>About Us</Link></MenubarTrigger>
          </MenubarMenu>
          
          <MenubarMenu>
          <ModeToggle/>
          </MenubarMenu>

        </MenubarMenu>
      </div>

        
        
        <MenubarMenu>
        <div className=" container ml-auto flex items-center gap-4 justify-end">
            
            {role === 'Vendor' || role === 'Customer' ? (
              <>
              <Addtocartbar className="flex items-center justify-end"/>
              <SheetDemo className="flex items-center justify-end"/>
              <Link href='/loginsignup'><Button onClick={() => alert('Logging out...')}>Logout</Button></Link>
              </>
            ) : (
              
              <Link href='/loginsignup'><Button onClick={() => alert('Logging out...')}>Login</Button></Link>
            )}

        </div>
        </MenubarMenu>
      </Menubar>
      
          
      
      </div>
    )
  }