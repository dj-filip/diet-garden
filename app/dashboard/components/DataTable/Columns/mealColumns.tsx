"use client"

import { MealsItem } from "@/app/meals/components/Meals/Meals";
import { Button } from "@/components/ui/button";
import { Meal } from "@/models/mealModel";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";



const IMAGES_URL: string = process.env.NEXT_PUBLIC_IMAGES_URL || "";


export const mealColumns: ColumnDef<MealsItem>[] = [
   {
    accessorKey: "image",
    header: "Image",
    size: 200,
    cell: ({ getValue, row }) => {
      const imageName = getValue<string>();
      const imageUrl = `${IMAGES_URL}${imageName}`
      return (
        <img
          src={imageUrl}
          alt={`Image of ${row.original.category}`}
          className="h-15 w-15 object-cover rounded"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 150,
  },
  {
    accessorKey: "category",
    header: "Category",
    size: 100
  },
  {
    accessorKey: "fastingMeal",
    header: "fastingMeal",
    size: 200,

  },
  {
    accessorKey: "actions",
    header: "Actions",
    enableSorting: false,
    enableResizing: false,
    meta: {
      className: "text-center",
      headerClassName: "text-center",
    },
    cell: ({ row }) => {
      const grocery = row.original;         // full row object
      return (
        <div className="flex items-center justify-center gap-2">
          <Button
            size="icon"
            variant="ghost"
          // onClick={() => handleEdit(grocery)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
          // onClick={() => handleDelete(grocery)}
          >
            <Trash className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      );
    },
  },
]