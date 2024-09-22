import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import { Textarea } from "@/components/ui/textarea"


 
  

export function DrawerDemo() {
 

  return (
<Drawer>
  <DrawerTrigger>chatbot</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Welcome to MediBot !</DrawerTitle>
      <DrawerDescription>your goto AI assistant</DrawerDescription>
    </DrawerHeader>

    <DrawerFooter>
        <div>
        <Textarea placeholder="Type your message here." />
        </div>

        <div className="flex justify-center items-center gap-4">
            <Button>Search</Button>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
        </div>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}
