import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { GroceriesItem } from "../Groceries/Groceries";



interface GroceryBoxProps {
  grocery: GroceriesItem,
  onClick: () => void
}

const IMAGES_URL: string = process.env.NEXT_PUBLIC_IMAGES_URL || "";


function GroceryBox({ grocery, onClick }: GroceryBoxProps) {

  const imageUrl: string = `${IMAGES_URL}${grocery.image}` || "";

  return (
    <Card
      key={grocery.id.toString()}
      onClick={onClick}
      className="basis-[45%] md:basis-auto"
    >
      <CardHeader className="items-center">
        <Avatar className="w-20 h-auto md:w-45">
          <AvatarImage src={imageUrl} />
        </Avatar>
      </CardHeader>
      <CardFooter className="flex-col justify-center">
        <CardTitle className="h-8 flex items-end uppercase text-center">{grocery.name}</CardTitle>
        <CardDescription className="w-20 border-t-1 mt-2 pt-2 font-medium text-center">{grocery.nutrients.energy?.[0]?.amount} <span className="font-light italic">kcal</span></CardDescription>
      </CardFooter>
    </Card>
  )
  // return (
  //   <div className="flex flex-col items-center">
  //     <img className="w-45" src={imageUrl} alt={grocery.name.toLowerCase()} />
  //     <h3 className="text-xl font-medium text-center uppercase">{grocery.name}</h3>
  //     <h5 className="w-20 border-t-1 mt-2 pt-2 font-medium text-center">{grocery.nutrients.energy?.[0]?.amount} <span className="font-light italic">kcal</span></h5>
  //   </div>
  // )
}

export default GroceryBox;