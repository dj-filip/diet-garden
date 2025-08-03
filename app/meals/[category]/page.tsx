import { connectDB } from "@/lib/db";
import { Meal, MealModel } from "@/models/mealModel";
import Meals from "../components/Meals/Meals";

import slugify from "slugify";



async function MealsCategoryPage({ params }: { params: { category: string } }) {
  await connectDB();
  const mealsData: Meal[] = await MealModel.find({}).lean<Meal[]>();

  const category = decodeURIComponent(params.category);

  const meals = mealsData.filter(
    meal => slugify(meal.category, {
      lower: true,
      strict: true,
      trim: true
    }) === params.category
  );



  console.log(category)



  return (
    <div>
      <Meals meals={meals} />
    </div>
  )
}

export default MealsCategoryPage;