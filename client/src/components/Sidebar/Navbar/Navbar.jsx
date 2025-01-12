import { NavLink } from "react-router-dom";
import GroceriesIcon from "../../Icons/GroceriesIcon";
import MealsIcon from "../../Icons/MealsIcon";


function Navbar() {
  return (
    <ul className="navbar-list">
      <li>
        <NavLink to="/"><GroceriesIcon />Groceries</NavLink>
      </li>
      <li>
        <NavLink to="/meals"><MealsIcon />Meals</NavLink>
      </li>
      {/* <li>
        <NavLink to="/meal-box-plan">Meal Plan</NavLink>
      </li> */}
    </ul>
  )
}

export default Navbar;