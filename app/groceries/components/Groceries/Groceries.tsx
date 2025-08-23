'use client'

import { Nutrient } from "@/models/groceryModel";
import GroceriesTabsNav from "../GroceryTabs/GroceryTabs";
import { useState } from "react";
import GroceryBox from "../GroceryBox/GroceryBox";
import GroceryDrawer from "../GroceryDrawer/GroceryDrawer";

export type GroceriesItem = {
  id: string,
  name: string,
  fdcid: number,
  category: string,
  nutrients: {
    energy: Nutrient[];
    macronutrients: Nutrient[];
    vitamins: Nutrient[];
    minerals: Nutrient[];
  },
  image: string
}

export interface GroceriesProps {
  groceries: GroceriesItem[];
}



function Groceries({ groceries }: GroceriesProps) {

  const [activeTab, setActiveTab] = useState<string>("");

  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedGrocery, setSelectedGrocery] = useState<GroceriesItem | null>(null);

  const handleDrawerOpen = (grocery: GroceriesItem) => {
    setSelectedGrocery(grocery);
    setOpenDrawer(true);
  }

  console.log(groceries)

  return (
    <div className="pt-2">
      <GroceriesTabsNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex flex-wrap justify-between gap-4 mx-auto p-4 md:w-4/5 md:p-6 md:gap-8">
        {groceries.filter(grocery => !activeTab || activeTab === grocery.category).map(grocery => (
          <GroceryBox
            key={grocery.id}
            grocery={grocery}
            onClick={() => handleDrawerOpen(grocery)}
          />
        ))}
      </div>

      <GroceryDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        selectedGrocery={selectedGrocery} />
    </div>
  );
}


export default Groceries;