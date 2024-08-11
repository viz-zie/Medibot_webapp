'use client'
import Lottie from 'lottie-react'

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
import headericon from '@/components/assets/headerlogo5.png'

 


  export function MenubarDemo() {
    return (
      <div>

      <Menubar className="p-8 w-full align-center  ">
      <div className='flex w-1/2 sm'>
      <MenubarMenu>
      
      {/*<Lottie animationData={animationdata} className='w-10 h-10'></Lottie>*/}
      <Image src={headericon} width={40} height={40} alt='mainlogo'></Image>
      
        <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger><Link href="/servicespage">Services</Link></MenubarTrigger>
      </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>About Us</MenubarTrigger>
          <MenubarMenu>
          <MenubarTrigger><Link href="/vendorpage">Vendor</Link></MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
          <ModeToggle/>
          </MenubarMenu>
        </MenubarMenu>
      </div>

      <MenubarMenu>
      <div className=" container ml-auto flex items-center gap-4 justify-end">
          <SheetDemo className="flex items-center justify-end"/>
          <Link href='./loginpage'><Button>Login / Signup</Button></Link>
      </div>
      </MenubarMenu>
      </Menubar>
      
          
      
      </div>
    )
  }