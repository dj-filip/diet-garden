import { useEffect, useState } from "react";


const mainNutrientLabels = ["Energy", "Protein", "Carbs", "Fat", "Fiber"];



function Infobar({ selectedGrocery, setSelectedGrocery }) {

  if (!selectedGrocery) return;

  const [groceryDescription, setGroceryDesription] = useState("");

  const { groceryName: name, groceryImage: image, groceryNutrients: nutrients } = selectedGrocery;

  const imageUrl = `${import.meta.env.VITE_IMAGES_URL}${image}`



  const fetchGroceryDescription = async (title) => {
    console.log(title);
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(title)}&origin=*`);
    const data = await response.json();
    const pages = data.query.pages;
    const page = Object.values(pages)[0];
    return page.extract;
  }

  fetchGroceryDescription(name).then((description) =>
    setGroceryDesription(description)
  );


  const handleInfobarClose = () => {
    setSelectedGrocery();
  }

  return (
    <div className="infobar-container">
      <button className="x-btn" onClick={() => handleInfobarClose()}></button>
      <div className="info-image-wrap">
        <img className="grocery-item-info-img" src={imageUrl} alt={name.toLowerCase()} />
      </div>
      <p><strong></strong>{groceryDescription}</p>
      <div className="infobar__main-nutrients-wrap flex">
        <h5>ENERGY <span className="w-300">{nutrients.energy?.[0]?.amount} kcal (per 100g)</span></h5>
        <h5>CARBS <span className="w-300">{nutrients.macronutrients?.[2]?.amount} kcal</span></h5>
        <h5>PROTEIN <span className="w-300">{nutrients.energy?.[0]?.amount} kcal</span></h5>
        <h5>FAT <span className="w-300">{nutrients.energy?.[0]?.amount} kcal</span></h5>
      </div>
      <div className="infobar__other-nutrients-wrap flex">
        <h5>Vitamins and Minerals</h5>
        {nutrients.vitamins.map(vitamin => (
          vitamin.amount !== 0 && (
            <div className="infobar__other-nutrients-row flex">
              <h6>{vitamin.name}</h6>
              <div className="infobar__other-nutrients-graph"></div>
              <h6><strong>{vitamin.amount}</strong></h6>
              <h6><strong>{vitamin.unitName.slice(0, -1) + vitamin.unitName.slice(-1).toLowerCase()}</strong></h6>
            </div>
          )
        ))}
      </div>
    </div >
  )
}

export default Infobar