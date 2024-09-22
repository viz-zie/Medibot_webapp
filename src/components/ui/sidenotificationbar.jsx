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
import notificationimg from '../assets/bellnotification4.svg'
import { NotifCardDemo } from "./notifications"



export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="Ghost"><Image src={notificationimg} width="40" height="auto" alt="bellicon"></Image></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <NotifCardDemo/>
        </SheetHeader>
        
      </SheetContent>
    </Sheet>
  )
}
