import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { BACKEND_URL } from "../../../config/serverConfig";


function MealPage() {
  const [ingredients, setIngredients] = useState();

  const location = useLocation();

  const { id } = useParams();
  const mealData = location.state?.meal;

  const imageUrl = `${import.meta.env.VITE_IMAGES_URL}`;



  useEffect(() => {
    const fetchIngredients = async (ingredients) => {
      const query = ingredients.map(id => `ids=${id}`).join('&');
      const response = await fetch(`${`${BACKEND_URL}/groceries/getGroceries`}?${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setIngredients(data);
    }

    fetchIngredients(mealData.ingredients);
  }, [])



  if (!ingredients) {
    return (
      <h1>Loading</h1>
    )
  }


  return (
    <div className="meal-page-wrap">
      <h2 className="meal-heading">{mealData.name}</h2>
      <div className="flex meal-hero-wrap">
        <img className="meal-img" src={`${imageUrl}${mealData.image}`} alt={mealData.name} />
        <div className="flex meal-page-ingredients-wrap">
          {ingredients.map(ingredient => (
            <div className="flex align-center ingredient-box-wrap">
              <img className="ingredient-box-img-th" src={`${imageUrl}${ingredient.image}`} alt={ingredient.name} />
              <div className="ingredient-box-heading-wrap">
                <h4 className="ingredient-box-heading">{ingredient.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="meal-body-txt">{mealData.description}</p>
    </div>
  )
}

export default MealPage;