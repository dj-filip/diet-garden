"use client"

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { getRandomValues } from "crypto";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

export type GroceryT = {
  id: string,
  fdcid: number,
  category: string,
  image: string,
}


const IMAGES_URL: string = process.env.NEXT_PUBLIC_IMAGES_URL || "";


export const groceryColumns: ColumnDef<GroceryT>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 200,
    meta: {
      headerClassName: "font-semibold",
    },
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
    meta: {
      headerClassName: "font-semibold",
    },
  },
  {
    accessorKey: "fdcid",
    header: "fdcid",
    size: 100,
    meta: {
      headerClassName: "font-semibold",
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    size: 200,
    meta: {
      headerClassName: "font-semibold",
    },
  },
  {
    accessorKey: "id",
    header: "Actions",
    enableSorting: false,
    enableResizing: false,
    meta: {
      className: "text-center",
      headerClassName: "text-center",
    },
    cell: ({ getValue, row }) => {
      const id = getValue<string>();
      return (
        <div className="flex items-center justify-center gap-2">
          <Link href={`/groceries/${id}/edit/`}>
            <Pencil className="h-4 w-4" />
          </Link>
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