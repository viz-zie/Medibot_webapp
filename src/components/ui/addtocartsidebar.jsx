import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import addtocartimg from '../assets/addcart.png'
import { NotifCardDemo } from "./notifications"



export function Addtocartbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="Ghost"><Image src={addtocartimg} width="40" height="auto" alt="bellicon"></Image></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <NotifCardDemo/>
        </SheetHeader>
        
      </SheetContent>
    </Sheet>
  )
}
