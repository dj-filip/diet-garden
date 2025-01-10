import { useEffect, useState } from "react";
import MealBox from "./MealBox/MealBox";
import { Link, NavLink } from "react-router-dom";

import { BACKEND_URL } from "../../config/serverConfig";

function Meals() {

  const [mealsData, setMealsData] = useState();


  useEffect(() => {

    const fetchMeals = async () => {

      const result = await fetch(`${BACKEND_URL}/meals/getMeals`);
      const data = await result.json();

      setMealsData(data);

    }
    fetchMeals();

  }, []);




  if (!mealsData) {
    return (
      <h1>Loading</h1>
    )
  }

  const categorizedMeals = mealsData.reduce((acc, meal) => {
    const { category } = meal; // Extract the meal category
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(meal);
    return acc;
  }, {});

  const categoriesOrder = ['Breakfast', 'Main Course', 'Salads', 'Snacks', 'Smoothies'];

  // categorizedMeals.sort((a, b) =>
  //   categoriesOrder.indexOf(a.rank) - categoriesOrder.indexOf(b.rank)
  // );

  console.log(categorizedMeals)

  // Example of rendering meals by categories
  Object.keys(categorizedMeals).forEach(category => {
    console.log(`Category: ${category}`);
    console.log(categorizedMeals[category]); // Meals under this category
  });


  return (
    <div className="groceries-wrap">
      {
        Object.keys(categorizedMeals).map(category => (
          <>
            <h5 className="meals-categories-title">{category}</h5>
            <div className="flex meals-wrap">
              {categorizedMeals[category].map(meal => (
                <NavLink
                  key={meal._id}
                  to={`/meals/${meal._id}`}
                  state={{ meal }}
                >
                  <MealBox key={meal._id} meal={meal} />
                </NavLink>
              ))}
            </div>
          </>
        ))}
    </div>
  )
}

export default Meals;