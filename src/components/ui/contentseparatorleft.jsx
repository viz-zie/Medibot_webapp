import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { DrawerDemo } from "./chatbotpage"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-5 ">
        <h4 className="text-7xl font-bold leading-none animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Medisoter.io</h4>
        <p className="text-lg text-muted-foreground">
          The Medical AI-Assistant
        </p>

        <p className="text-3xl text-muted-foreground">
        {"we are dedicated to enriching people's lives through improved health and fitness"}
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          {/*<DrawerDemo className="border-white-50 "/>*/}
        </div>
        
      </div>
      
    </div>
  )
}
