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
import { DrawerDemo } from '@/components/ui/chatbotpage'
import Image from 'next/image'
import headericon from '@/components/assets/headerlogo6.png'
import { usePathname } from 'next/navigation'
import classes from './header.module.css'
 


  export function MenubarDemowithoutloginandnotifanddashboardbtn() 
  {
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


          <MenubarMenu>
          <MenubarTrigger><Link href="/aboutus" className={path.startsWith('/aboutus')? classes.active:undefined}>About Us</Link></MenubarTrigger>
          </MenubarMenu>
          
          <MenubarMenu>
          <ModeToggle/>
          </MenubarMenu>

        </MenubarMenu>
      </div>

        
      </Menubar>
      
          
      
      </div>
    )
  }