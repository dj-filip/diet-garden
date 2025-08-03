import { connectDB } from "@/lib/db"
import { Grocery, GroceryModel } from "@/models/groceryModel";
import { toFormGrocery } from "@/lib/utils";
import GroceryForm, { GroceryFormItem } from "../../components/GroceryForm/GroceryForm";



async function EditGroceryPage({ params }: { params: { id: string } }) {
  const id = params.id;

  await connectDB();
  const groceryData: Grocery | null = await GroceryModel.findById(id).lean<Grocery | null>();


  const grocery: GroceryFormItem | null = toFormGrocery(groceryData)

  console.log(groceryData)

  if (!grocery) {
    return (
      <div>Grocery not found!</div>
    )
  }

  return (
      <GroceryForm grocery={grocery} />
    )

}

export default EditGroceryPage;