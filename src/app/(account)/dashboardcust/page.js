'use client'
import React from 'react'

import { Dashboard } from './vendorpage';
import { Button } from '@/components/ui/button';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"


export default function vendorpage(){
  return (
    <div>
    <aside className="fixed  left-0 z-10  w-14 h-0 flex-col border-r bg-background sm:flex "> 
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Dashboard</TooltipContent>
      </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Orders</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Orders</TooltipContent>
      </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Package className="h-5 w-5" />
            <span className="sr-only">Products</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Products</TooltipContent>
      </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
      </TooltipProvider>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <LineChart className="h-5 w-5" />
            <span className="sr-only">Analytics</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Analytics</TooltipContent>
      </Tooltip>
      </TooltipProvider>
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
      </TooltipProvider>
    </nav>
    
  </aside>
      <Dashboard/>
      </div>
    
  );
}
