'use client'

import React,{useState} from "react"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import vishphoto2 from './assets/vishphoto2.jpg'
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import axios from "axios"
import  Toast  from "@/components/ui/toast"
import mongoose from 'mongoose';
import { RingChartComponent } from "./ringchart1"
import { RadialChart } from "./radialchart1"
import { BarChart1 } from "./barchart1"
import { MdEdit } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea"
import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Dashboard(custid) 
{
  console.log("component",custid);
    
   //const custid = new mongoose.Types.ObjectId(customerid);
    const [isEditing, setIsEditing] = useState(false);
  // State to hold user details
  const [userDetails, setUserDetails] = useState({
    _id : custid.custid,
    username:"",
    email:"",
    address: "",
    gender:'',
    bloodgroup:'',
    latitude: "",
    longitude: "",
    profilepic: null
  });

 // Handle text and textarea changes
 const handleChange = (e) => {
  const { name, value } = e.target;
  setUserDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value,
  }));
};

// Handle profile picture change
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        profilepic: e.target.result,
      }));
    };
    reader.readAsDataURL(file);
  }
};


const fetchUserDetails = async (custid) => {

  try {

    console.log('beforegetuser',custid)

    const response = await fetch(`/api/users/getUser?custid=${custid.custid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }
    const result = await response.json();
    console.log (result) 
      setUserDetails({
      _id: result._id,
      username: result.username,
      email: result.email,
      address: result.address,
      gender: result.gender,
      bloodgroup: result.bloodgroup,
      latitude: result.latitude,
      longitude: result.longitude,
      profilepic: result.profilepic
    });

    console.log('expectiung',userDetails)
   
  } 
  catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

  // Function to toggle edit mode and update details
  const putUserDetails = async (custid) => 
    {
    setIsEditing(false);
    console.log('Updated user details:', userDetails);
    console.log("inside updating");
    // Here, you could also make an API request to save the updated details on the server

    try 
    {
      const response = await fetch(`/api/users/putUser?custid=${custid.custid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

  
      const data = await response.json();
      if (data.success) {
        console.log("User details updated successfully");
      } else {
        console.error("Failed to update user details:", data.message);
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };


 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    if (custid) {
      console.log('useefffect',custid);
      fetchUserDetails(custid); // Pass custid as an argument
    }

  }, [custid]); // Runs only once, when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;





  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 " >
    
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
            <div className="">
              <p className="text-xl font-bold leading-none">Hi {userDetails.username}</p>
              <p className="text-lg text-muted-foreground mb-4">
                Welcome back!
              </p>
            </div>
            
          </Sheet>
          
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>


          <Avatar className="w-24 h-24">
          {userDetails.profilepic ? (
            <AvatarImage src={userDetails.profilepic} alt="Profile Picture" />
          ) : (
            <AvatarFallback>PP</AvatarFallback>
          )}
        </Avatar>


        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

          
          {!isEditing ? 
          (
          
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardDescription>Address</CardDescription>
                  <CardTitle className="text-balance max-w-lg leading-relaxed py-2">
                  {userDetails.address}
                  </CardTitle>
                  <CardDescription>Latitude</CardDescription>
                  <CardTitle className="text-balance max-w-lg leading-relaxed py-2">
                  {userDetails.latitude}
                  </CardTitle>
                  <CardDescription>Longitude</CardDescription>
                  <CardTitle className="text-balance max-w-lg leading-relaxed py-2">
                  {userDetails.longitude}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button onClick={() => setIsEditing(true)}><MdEdit/>Edit</Button>
                </CardFooter>
             
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-1">
                  <CardDescription>Gender</CardDescription>
                  <CardTitle className="text-4xl">{userDetails.gender}</CardTitle>
                </CardHeader>
                <CardHeader className="pb-2">
                  <CardDescription>Blood Group </CardDescription>
                  <CardTitle className="text-4xl">{userDetails.bloodgroup}</CardTitle>
                </CardHeader>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month Savings </CardDescription>
                  <CardTitle className="text-4xl">₹529</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% saved from last month using vouchers and membership
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={50} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>

            
            ) : (
          


            <div>
                <Card
                    className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                  >
                    <CardHeader className="pb-3">
                      <CardDescription>Address</CardDescription>
                      <Textarea
                        placeholder="Enter your full address here."
                        name="address"
                        value={userDetails.address}
                        onChange={handleChange}
                      />
                      <div className="flex gap-4">
                        <div>
                          <CardDescription className='mt-2'>Latitude</CardDescription>
                          <input
                          type="text"
                          name="latitude"
                          placeholder="Enter your latitude"
                          value={userDetails.latitude}
                          onChange={handleChange}
                          className="w-full p-2 border rounded mt-2"
                          />
                        </div>
                        <div>
                        <CardDescription className='mt-2'>Longitude</CardDescription>
                          <input
                          type="text"
                          name="longitude"
                          placeholder="Enter your longitude"
                          value={userDetails.longitude}
                          onChange={handleChange}
                          className="w-full p-2 border rounded mt-2"
                          />
                        </div>

                        <div>
                        <CardDescription className='mt-2 mb-3'>gender</CardDescription>
                        <Select
                        className="w-64"
                          value={userDetails.gender}
                          onValueChange={(value) => setUserDetails((prevDetails) => ({ ...prevDetails, gender: value }))}
                        >
                          <SelectTrigger className="w-full p-2 border rounded">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        </div>

                        <div>
                        <CardDescription className='mt-2 mb-3'>Blood Group</CardDescription>
                        <Select
                          value={userDetails.bloodGroup}
                          onValueChange={(value) => setUserDetails((prevDetails) => ({ ...prevDetails, bloodgroup: value }))}
                        >
                          <SelectTrigger className="w-full p-2 border rounded">
                            <SelectValue placeholder="Select Blood Group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                          </SelectContent>
                        </Select>
                        </div>
                      </div>

                      <div className="flex justify-center">

                      
                        
                      
                      <div className="flex flex-col mt-4">
                        <CardDescription>Profile Picture</CardDescription>
                        <Input type="file" onChange={handleImageChange} />
                      </div>
                
                      </div>
                        
                      
                      
                    </CardHeader>
                    <CardFooter>
                      <Button onClick={() => { putUserDetails(custid) }}><MdEdit/>Update</Button>
                    </CardFooter>
                  </Card>
            </div>

          
          )}
          


            <Tabs defaultValue="week">
              <div className="flex items-center">
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Pharmacy Details</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Saravana Medicals</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            No.35, Pillayar Koil St, Raghavendra Nagar, Nesapakkam, Chennai, Tamil Nadu 600078
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Store-pickup
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Ongoing
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            4 Nov-2024
                          </TableCell>
                          <TableCell className="text-right">₹355.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Apollo Pharmacy</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            No 20, New, Vanniar St, Nesapakkam, Chennai, Tamil Nadu 600040
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Delivery
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Completed
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            3 Nov-2024
                          </TableCell>
                          <TableCell className="text-right">₹3250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">MedPlus Pharmacy</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            3A, 1st St, Virugambakkam, Chennai, Tamil Nadu 600078
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Store-pickup
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Cancelled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            3 Nov-2024
                          </TableCell>
                          <TableCell className="text-right">₹550.00</TableCell>
                        </TableRow>
                        {/*<TableRow>
                          <TableCell>
                            <div className="font-medium">Noah Williams</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              noah@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Subscription
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-25
                          </TableCell>
                          <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>*/}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <CardHeader className="px-2" section id="Products">
                    <CardTitle>Frequently Searched</CardTitle>
                    <CardDescription>
                      Know about your frequent orders
                    </CardDescription>
            </CardHeader>
            <div className="grid gap-x-2 place-items-center">
            <Carousel
            opts={{
              align: "start",
            }}
            className="w-9/12 max-w-base"
          >
          <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
          <CardHeader className="" section id="Analysis">
                    <CardTitle>Analysis</CardTitle>
                    <CardDescription>
                      View your Analysis
                    </CardDescription>
            </CardHeader>
          <div className="flex justify-center gap-4">
            <BarChart1/>
            <RadialChart/>
            {/*<RingChartComponent/>*/}
          </div>
          </div>
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Order N09ZX01
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: 4 November, 2024</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        ShelCal500 x <span>2</span>
                      </span>
                      <span>₹256.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Vix Vaporub x <span>1</span>
                      </span>
                      <span>₹94.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹350.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>-</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>₹5.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>₹355.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Customer Address</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>{userDetails.username}</span>
                      <div className="text-muted-foreground">
                        {userDetails.address}
                      </div>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Store-Pickup Information</div>
                    <div className="text-muted-foreground">
                      No.35, Pillayar Koil St, Raghavendra Nagar, Nesapakkam, Chennai, Tamil Nadu 600078
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Customer</dt>
                      <dd></dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">{userDetails.email}</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+91 9276266630</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">4 November, 2024</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
