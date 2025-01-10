import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <ul className="navbar-list">
      <li>
        <NavLink to="/groceries">Groceries</NavLink>
      </li>
      <li>
        <NavLink to="/meals">Meals</NavLink>
      </li>
      {/* <li>
        <NavLink to="/meal-box-plan">Meal Plan</NavLink>
      </li> */}
    </ul>
  )
}

export default Navbar;