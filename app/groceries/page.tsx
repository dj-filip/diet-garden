
import { toGrocery } from "@/lib/utils";
import { connectDB } from "../../lib/db";
import { GroceryModel, Grocery } from "../../models/groceryModel";
import Groceries from "./components/Groceries/Groceries";
import type { GroceriesItem } from "./components/Groceries/Groceries";

// interface GroceryItem {
//   groceryCategory: string,
//   [key: string]: any;
// }


async function GroceriesPage() {
  await connectDB();
  const groceriesData: Grocery[] = await GroceryModel.find({}).lean<Grocery[]>();


  const groceries: GroceriesItem[] = toGrocery(groceriesData);


  console.log(groceries);
  console.log(groceriesData);


  return (
    <div>
      <Groceries groceries={groceries} />
    </div>
  );
}

export default GroceriesPage;