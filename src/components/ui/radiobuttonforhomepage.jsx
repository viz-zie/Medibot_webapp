import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="1234">
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="1" id="r1" />
        <Label htmlFor="r1">Assists telecommunication within the facility</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="2" id="r2" />
        <Label htmlFor="r2">Efficiently replies to patient's text messages</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="3" id="r3" />
        <Label htmlFor="r3">Enhances the ease of contacting the facility for patients</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="4" id="r3" />
        <Label htmlFor="r3">Automates and expedites the customer service</Label>
      </div>
    </RadioGroup>
  )
}
