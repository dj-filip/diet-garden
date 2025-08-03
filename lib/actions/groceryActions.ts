import { GroceryFormItem } from "@/app/groceries/components/GroceryForm/GroceryForm";
import { safeParse } from "zod";
import { GroceryFormSchema, GroceryFormSchemaType } from "../schemas/GroceryFormSchema";


export const addGrocery = async (formData: GroceryFormSchemaType) => {
  const validateFields = GroceryFormSchema.safeParse(formData)
  
  if(!validateFields.success) {
    return console.log("Invalid Fields", validateFields.error.issues);
  }

  console.log("GroceryFormData: ", formData)
}