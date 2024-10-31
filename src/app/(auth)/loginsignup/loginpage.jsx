'use client'
import Lottie from 'lottie-react'
import animationData from './assets/loginanimation7.json'
import doctorpic from './assets/docpic3.png'
import Link from "next/link"
import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { DatePickerDemo } from "@/components/ui/datepicker"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { toast } from "sonner"




  export function CardWithForm() 
  {
    const [user,setUser] = React.useState(
      {
        username : "",
        password : "",
      }
    )

    const onLogin = async () =>
    {

    }

    const onSignUp = async() =>
    {

    }

    return (
      <Card className="w-[800px] h-[500px] flex">
      <div className='w-1/2'>
        {/*<Lottie animationData={animationData}></Lottie>*/}
        {<Image src={doctorpic} alt="logindoc"></Image>}
      </div>
      <div className='w-1/2'>
      <Tabs defaultValue="Login" className="w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hey ! </CardTitle>
        <CardDescription>Login to access the website</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="loginpage/ctrllogin.jsx" method='POST' >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="Enter your username" type="text" value={user.username} onChange={(e) => setUser({...user,username:e.target.value})} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Role</Label>
              <Select>
                <SelectTrigger id="framework" name="role">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Vendor">Vendor</SelectItem>
                  <SelectItem value="Customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pwd">Password</Label>
              <Input id="pwd" name="pwd" placeholder="Enter your password" type="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Link href="/"><Button onClick={onLogin}>Login
        </Button></Link>
      </CardFooter>












    </Card>
      </TabsContent>
      <TabsContent value="Sign Up">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hey !</CardTitle>
        <CardDescription>Sign Up , if you are a new user</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Username">Username</Label>
              <Input id="Username" placeholder="Enter your username" value={user.username} onChange={(e) => setUser({...user,username:e.target.value})} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Role</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Vendor">Vendor</SelectItem>
                  <SelectItem value="Customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password">Password</Label>
              <Input id="Password" placeholder="Enter your Password" type="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        {/*used a sonner button cum toast*/}
        <Link href="/"><Button onClick={onSignUp}>SignUp</Button></Link>
      </CardFooter>
    </Card>
      </TabsContent>
    </Tabs>
      </div>
      </Card>
    )
  }