import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import details from "./servicesdetails"
import Image from "next/image"

export function CardServices(props) {
  return (
    
        <div className="flex gap-4 justify-center items-center mb-10 ">
          <Card className="w-[350px] transform rounded-xl transition duration-300 hover:scale-105">
            <CardContent>
            <Image src={props.imgurl} height="100" width="400" alt="labtest"></Image>
            </CardContent>
            <CardHeader>
              <CardTitle>{props.title}</CardTitle>
              <CardDescription>{props.description}</CardDescription>
              <Button>Click here</Button>
            </CardHeader>
          </Card>
        </div>
    
  )
}
