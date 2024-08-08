import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { DrawerDemo } from "./chatbotpage"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-5">
        <h4 className="text-5xl font-bold leading-none">HealthMed.io</h4>
        <p className="text-lg text-muted-foreground">
          The Medical AI-Assistant
        </p>

        <p className="text-sm text-muted-foreground">
        Mental health is an essential part of your physical health and personal well-being. Not a single one of us is immune to mental health challenges. People at all levels of social, occupational or economic status can experience cognitive problems.
        People are looking for help in breaking the fear of visiting the doctors’ clinics, eliminating wasted time of the round trip, and providing a smart mental companion system. Timely nurturing our mental health can help to combat or prevent future mental health problems.
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <DrawerDemo className="border-white-50"/>
        </div>
        
      </div>
      
    </div>
  )
}
