import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"



  
export function AvatarDemo() {
return (
    <Avatar>
    <AvatarImage src="" alt="@shadcn" />
    <AvatarFallback>P</AvatarFallback>
    </Avatar>
    )
}
