import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import GroceriesPage from "../pages/GroceriesPage/GroceriesPage";
import GroceryPage from "../pages/GroceriesPage/GroceryPage/GroceryPage";
import MealsPage from "../pages/MealsPage/MealsPage";
import AddGroceryPage from "../pages/DashboardPage/AddGroceryPage/AddGroceryPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import MealPage from "../pages/MealsPage/MealPage/MealPage";
import AddMealPage from "../pages/DashboardPage/AddMealPage/AddMealPage";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/groceries">
        <Route index element={<GroceriesPage />} />
        <Route path="grocery" element={<GroceryPage />} />
      </Route>
      <Route path="/meals">
        <Route index element={<MealsPage />} />
        <Route path=":id" element={<MealPage />} />
      </Route>
      <Route path="/dashboard">
        <Route index element={<DashboardPage />} />
        <Route path="add-grocery" element={<AddGroceryPage />} />
        <Route path="add-meal" element={<AddMealPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;