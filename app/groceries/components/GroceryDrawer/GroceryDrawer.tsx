import { Button } from "@/components/ui/button";
import { 
  Drawer, 
  DrawerContent, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer";
import { GroceriesItem } from "../Groceries/Groceries";


interface GroceryDrawerProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  selectedGrocery: GroceriesItem | null
}

function GroceryDrawer( { open, onOpenChange, selectedGrocery }: GroceryDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent>
        <DrawerTitle>{selectedGrocery?.name}</DrawerTitle>
      </DrawerContent>
    </Drawer>
  )
}

export default GroceryDrawer