'use client'

import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";


import { zodResolver } from "@hookform/resolvers/zod";
import TextFormField from "@/components/form/TextFormField";
import FileUploadFormField from "@/components/form/FIleUploadFormField";
import { Button } from "@/components/ui/button";
import SelectFormField from "@/components/form/SelectFormField";
import { addGrocery } from "@/lib/actions/groceryActions";
import { GroceryFormSchema, GroceryFormSchemaType } from "@/lib/schemas/GroceryFormSchema";


export type GroceryFormItem = {
  name: string,
  fdcid: string,
  category: string,
  image: string
}


export interface GroceryProps {
  grocery?: GroceryFormItem;
}


function GroceryForm({ grocery }: GroceryProps) {

  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false
  }

  const groceryCategories: string[] = ['Protein', 'Carbs', 'Veggies', 'Fats', 'Fruits', 'Nuts, Seeds & Dried Fruits', 'Teas', 'Herbs & Spices', 'Supplements', 'Other']

  const form = useForm<GroceryFormSchemaType>({
    resolver: zodResolver(GroceryFormSchema),
    defaultValues: grocery || {
      name: "",
      fdcid: "",
      category: "",
      image: ""
    }
  });


  const handleFileChange = (files: File[] | null) => {
    setFiles(files);
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      form.setValue("image", "");
    }
  };

  function onSubmit(values: GroceryFormSchemaType) {
    try {
      addGrocery(values)
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 p-10 space-y-4 text-right"
      >
        <TextFormField
          control={form.control}
          name="name"
          label="Name"
        />
        <TextFormField
          control={form.control}
          name="fdcid"
          label="FDCID"
          inputMode="numeric"
        />
        <SelectFormField
          control={form.control}
          name="category"
          label="Category"
          placeholder="Please select a category"
          options={groceryCategories}
        />
        <FileUploadFormField
          control={form.control}
          name="image"
          label="Select Grocery Image"
          files={files}
          setFiles={handleFileChange}
          dropZoneConfig={dropZoneConfig}
        />

        <Button
          type="submit"
          className="mt-20 bg-lime-500 hover:bg-lime-400"
        >Add Grocery</Button>
      </form>
    </Form>
  )
}

export default GroceryForm;