import { useEffect, useState } from "react";



const mainNutrientLabels = ["Energy", "Protein", "Carbs", "Fat", "Fiber"];


function Infobar({ selectedGrocery }) {


  if (!selectedGrocery) {
    return (
      <h1>Loading</h1>
    )
  }


  return (
    // <div className="infobar">
    //   <div className="info-image-wrap">
    //     <img className="grocery-item-info-img" src="./images/spinach-info.png" alt="spinach-info" />
    //   </div>
    //   <ul>
    //     {groceryMainNutrients.map((nutrient, index) => (
    //       <li key={index}>
    //         <h5 className="grocery-item-info">{mainNutrientLabels[index]}</h5>
    //         <span>
    //           {nutrient.amount} {nutrient.unitName}
    //           {index === 0 ? " (per 100 g)" : ""}
    //         </span>
    //       </li>
    //     ))}
    //   </ul>

    //   <h4>Vitamins and Minerals:</h4>
    //   <ul>
    //     {groceryOtherNutrients.map((nutrient, index) => (
    //       nutrient.amount > 0 &&
    //       <li key={index}>
    //         <h5 className="grocery-item-info">{nutrient.name}: </h5><span>{nutrient.amount} {nutrient.unitName === "UG" ? "µg" : nutrient.unitName.toLowerCase()}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="infobar">
      <div className="info-image-wrap">
        <img className="grocery-item-info-img" src="./images/spinach-info.png" alt="spinach-info" />
      </div>
      <h4>{selectedGrocery.groceryName}</h4>
    </div>
  )
}

export default Infobar;