import { NavLink } from "react-router-dom";


function GroceryBox({ groceryData, onClick }) {

  const { groceryName: name, groceryImage: image, groceryNutrients: nutrients } = groceryData;

  const imageUrl = `http://localhost:4000/uploads/images/groceries/${image}`;

  return (
    // <NavLink to="grocery">
    <div className="grocery-item-wrap" onClick={onClick}>
      <img className="grocery-item-img" src={imageUrl} alt={name.toLowerCase()} />
      <div className="flex flex-column align-center">
        <h4 className="grocery-item-title">{name}</h4>
        <h5 className="grocery-item-sub">{nutrients.energy?.[0]?.amount}<span> kcal</span></h5>
      </div>
    </div>
    // </NavLink>
  )
}

export default GroceryBox;