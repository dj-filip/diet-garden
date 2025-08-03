import { connectDB } from "@/lib/db";
import Meals from "./components/Meals/Meals";
import { Meal, MealModel } from "@/models/mealModel";


async function MealsPage() {
  await connectDB();
  const mealsData: Meal[] = await MealModel.find({}).lean<Meal[]>();


  return (
    <div>
      <Meals meals={mealsData} />
    </div>
  )
}

export default MealsPage;