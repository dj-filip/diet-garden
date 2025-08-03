import z from "zod"


export const GroceryFormSchema = z.object({
  name: z.string().min(1),
  fdcid: z.string(),
  category: z.string(),
  image: z.string()
});

export type GroceryFormSchemaType = z.output<typeof GroceryFormSchema>;