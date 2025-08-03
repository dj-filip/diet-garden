import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "../DataTable/DataTable";
import { groceryColumns } from "../DataTable/Columns/groceryColumns";
import { connectDB } from "@/lib/db";
import { GroceryModel, Grocery } from "@/models/groceryModel";
import { GroceriesItem } from "@/app/groceries/components/Groceries/Groceries";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Meal, MealModel } from "@/models/mealModel";
import { mealColumns } from "../DataTable/Columns/mealColumns";
import { MealsItem } from "@/app/meals/components/Meals/Meals";


async function DashboardTabs() {
  await connectDB();
  const groceries: Grocery[] = await GroceryModel.find({}).lean<Grocery[]>();
  const meals: Meal[] = await MealModel.find({}).lean<Meal[]>();

  const groceriesData: GroceriesItem[] = groceries.map(({ _id, name, fdcid, category, nutrients, image }) => ({
    id: _id.toString(),
    name,
    fdcid,
    category,
    nutrients,
    image
  }))

  const mealsData: MealsItem[] = meals.map(({ _id, name, category, ingredients, description, image, fastingMeal }) => ({
    id: _id.toString(),
    name,
    category,
    ingredients,
    description,
    image,
    fastingMeal
  }))



  return (
    <Tabs
      defaultValue="groceries"
      className="w-full">
      <TabsList>
        <TabsTrigger value="groceries" className="cursor-pointer">Groceries</TabsTrigger>
        <TabsTrigger value="meals" className="cursor-pointer">Meals</TabsTrigger>
      </TabsList>
      <TabsContent value="groceries" className="w-full flex flex-col gap-6">
        <Link
          href='/groceries/add'
          className="w-fit flex self-end gap-2 rounded p-2 text-sm font-medium text-white bg-lime-500"
        ><PlusIcon size={20}></PlusIcon>Add Grocery</Link>
        <DataTable columns={groceryColumns} data={groceriesData} />
      </TabsContent>
      <TabsContent value="meals" className="w-full flex flex-col gap-6">
        <Link
          href='/meals/add'
          className="w-fit flex self-end gap-2 rounded p-2 text-sm font-medium text-white bg-lime-500"
        ><PlusIcon size={20}></PlusIcon>Add Meal</Link>
        <DataTable columns={mealColumns} data={mealsData} />
      </TabsContent>
    </Tabs>
  )
}

export default DashboardTabs;