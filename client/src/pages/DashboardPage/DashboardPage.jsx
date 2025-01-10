import { NavLink } from "react-router-dom";


function DashboardPage() {
  return (
    <>
      <h1>DashboardPage</h1>
      <NavLink to="/dashboard/add-grocery">Add New Grocery</NavLink>
      <NavLink to="/dashboard/add-meal">Add New Meal</NavLink>
    </>
  )
}

export default DashboardPage;