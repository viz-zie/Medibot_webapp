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
import React from "react"
import { useState } from "react"
import Image from "next/image"
import addtocartimg from '../assets/addcart.png'
//import { NotifCardDemo } from "./notifications"


import { BellIcon, CheckIcon, TrashIcon} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ItemIndicator } from "@radix-ui/react-select"
import mongoose from 'mongoose';








export default function Addtocartbar() 
{
  
  const [customerorders, setCustomerOrders] = useState([]);

  const getCustomerMedList = async (uservalue) => {
    try 
    {
        const res = await fetch(`/api/orders/getOrdersByCustomers?customerId=${uservalue}`)
        const data = await res.json();
        console.log("after fetch")
        setCustomerOrders(data);

        console.log("on click of my cart ",customerorders)

        
    } 
    catch (error) 
    {
        console.log("you got an error");
    }
  }

  const deleteitemsfromcart = async function (customerId,itemId) 
  {
    console.log("i am inside delete")
   

    const delcustId = new mongoose.Types.ObjectId(customerId);
    const delitemId = new  mongoose.Types.ObjectId(itemId);
    //console.log(customerId," ",itemId)

    try {
      const response = await fetch(`/api/orders/deleteOrders?customerId=${delcustId}&itemId=${delitemId}`, {
        method: 'DELETE'
         
      });

      const data = await response.json();
      console.log(data);
      
      //console.log(delorder)

      if (data.acknowledged='true') 
      {
        alert(data.message || "Item deleted successfully");
        // Optionally, update your UI here by refreshing data or updating state
      } else {
        alert(data.message || "Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    }
    
  }


  const updateOrderStatus = async (customerId) => 
  {
    
    const objcustomerId = new mongoose.Types.ObjectId(customerId);
    const updateorderData = 
    {
        customerId: objcustomerId,
        orderStatus: 'requested',
    };

          console.log(updateorderData);
    try {
      const response = await fetch('/api/orders/putOrders', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateorderData),
      });
  
      const data = await response.json();
      if (data.success) {
        console.log("Order status updated successfully");
      } else {
        console.error("Failed to update order status:", data.message);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  }

  


  return (
    
      <Sheet>
      
      <SheetTrigger asChild>
        <Button variant="Ghost" onClick={() => getCustomerMedList('672f31dafb66709daea25827')}><Image src={addtocartimg} width="40" height="auto" alt="bellicon"></Image></Button>
      </SheetTrigger>
      <SheetContent>
      <ScrollArea className="h-full w-90 rounded-md ">
        <SheetHeader>

        
        <div className="mb-5">
          <div className="flex items-center justify-center">
              <h4 className="text-3xl font-bold leading-none mt-10" >Your Cart</h4>
          </div>
          <div className='flex items-center justify-center'>
              <p className="text-sm text-muted-foreground">Happy Shopping !</p>
          </div>
        </div>

      
      <div className="grid gap-4">
          
          {customerorders.map(({ orders }) =>
            orders.map(({ orderStatus,itemId,qty, drugDetails: { DrugName, Dosage, Manufacturer } }) => (
              <Card className="w-[320px]" key={itemId}>
                <CardContent className="pt-5">
                  <div className="flex items-center space-x-4 rounded-md p-4">
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Drug Name: <span className="font-normal">{DrugName}</span>
                          </p>
                          <p className="text-sm font-medium leading-none">
                            Dosage: <span className="font-normal">{Dosage}</span>
                          </p>
                          <p className="text-sm font-medium leading-none">
                            Manufacturer: <span className="font-normal">{Manufacturer}</span>
                          </p>
                          <p className="text-sm font-medium leading-none">
                            Quantity: <span className="font-normal">{qty}</span>
                          </p>
                          <p className="text-sm font-medium leading-none">
                            Status: <span className="font-normal">{orderStatus}</span>
                          </p>
                        </div>
            
                      <Button variant='Ghost' size='icon' onClick={() => deleteitemsfromcart('672f31dafb66709daea25827',itemId)}><TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" /></Button>
                      
                  </div>
                </CardContent>
              </Card>
        ))
      )}
    </div>
  
    <Button className="w-full" onClick={() => updateOrderStatus('672f31dafb66709daea25827','pending')}>
        <CheckIcon className="mr-2 h-4 w-4" /> Request Quotation
    </Button>
    
    </SheetHeader>
    <ScrollBar orientation='vertical'/>
    </ScrollArea>
    </SheetContent>
    
    
    </Sheet>
    
  )
}
