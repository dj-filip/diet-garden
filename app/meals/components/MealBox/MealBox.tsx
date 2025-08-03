import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Meal } from "@/models/mealModel";


interface MealBoxProps {
  meal: Meal
}

const IMAGES_URL: string = process.env.NEXT_PUBLIC_IMAGES_URL || "";



function MealBox({ meal }: MealBoxProps) {

  const imageUrl: string = `${IMAGES_URL}${meal.image}` || "";

  return(
    <Card 
    key={meal._id.toString()}
    className="w-100 flex-row rounded-sm p-0"
  >
      <Image 
        src={imageUrl}
        alt={meal.name}
        width={200}
        height={200}
        className="rounded-l-sm"
      />
      <CardContent className="flex items-center">
        <CardTitle>
          {meal.name}
        </CardTitle>
      </CardContent>
    </Card>
  )
}

export default MealBox;