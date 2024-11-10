import { BellIcon, CheckIcon, TrashIcon} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"





export function NotifCardDemo({ className, ...props}) {
  return (
    <Card className={cn("w-[350px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Add to cart</CardTitle>
        <CardDescription>Your list of orders</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md  p-4">
        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Drug Name :
            </p>
            <p className="text-sm font-medium leading-none">
              Dosage :
            </p>
            <p className="text-sm font-medium leading-none">
              Manufacturer :
            </p>
            <p className="text-sm font-medium leading-none">
              Quantity :
            </p>
          </div>
          <div>
          </div>
          <TrashIcon/>
        </div>
        
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Request Quotation
        </Button>
      </CardFooter>
    </Card>
  )
}
