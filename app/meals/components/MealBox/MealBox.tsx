import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Meal } from "@/models/mealModel";


interface MealBoxProps {
  meal: Meal
}

const IMAGES_URL: string = process.env.NEXT_PUBLIC_IMAGES_URL || "";



function MealBox({ meal }: MealBoxProps) {

  const imageUrl: string = `${IMAGES_URL}${meal.image}` || "";

  return (
    <Card
      key={meal._id.toString()}
      className="w-full flex-row gap-2 rounded-sm p-0 md:w-100 md:gap-6 "
    >
      <Image
        src={imageUrl}
        alt={meal.name}
        width={150}
        height={150}
        className="rounded-l-sm shrink-0 md:w-50"
      />
      <CardContent className="flex items-center p-2 md:p-4">
        <CardTitle>
          {meal.name}
        </CardTitle>
      </CardContent>
    </Card>
  )
}

export default MealBox;