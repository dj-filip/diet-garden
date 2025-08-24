import { Meal } from "@/models/mealModel";
import MealBox from "../MealBox/MealBox";
import { useMemo } from "react";


export type MealsItem = {
  id: string,
  name: string,
  category: 'Breakfast' | 'Main Course' | 'Snacks' | 'Smoothies / Shakes' | 'Salads' | 'Soups / Stews / Potages' | 'Other',
  ingredients: string,
  description: string,
  image: string,
  fastingMeal: boolean
}


interface MealsProps {
  meals: Meal[]
}

function Meals({ meals }: MealsProps) {


  const mealsByCategory = useMemo(() => {
    return meals.reduce<Record<Meal["category"], Meal[]>>((acc, meal) => {
      (acc[meal.category] ||= []).push(meal);
      return acc;
    }, {} as Record<Meal["category"], Meal[]>);
  }, [meals]);

  return (
    <div className="flex flex-col flex-wrap justify-between gap-8 mx-auto p-4 md:w-4/5 md:p-6">
      {Object.entries(mealsByCategory).map(([category, items]) => (
        <div
          key={category}
          className="flex flex-col gap-2"
        >
          <h2 className="italic text-zinc-400">{category}</h2>
          <div className="flex flex-wrap gap-8">
            {items.map((meal) => (
              <MealBox
                key={meal._id.toString()}
                meal={meal} />
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}

export default Meals;