import { useEffect, useState } from "react";
import GroceriesTabsNav from "./GroceriesTabsNav/GroceriesTabsNav";
import GroceryBox from "./GroceryBox/GroceryBox";



const URL = `http://localhost:4000/groceries/getGroceries`;


function Groceries({ selectedGrocery, setSelectedGrocery }) {

  const [activeTab, setActiveTab] = useState();
  const [groceriesData, setGroceriesData] = useState();
  const [listMode, setListMode] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const data = await result.json();

      setGroceriesData(data);


      const mainNutrientsList = ['Energy (Atwater General Factors)', 'Protein', 'Carbohydrate, by difference', 'Total lipid (fat)', 'Fiber, total dietary'];

      // Create the filtered and ordered array
      const mainNutrientsFiltered = mainNutrientsList.map(name => {
        return data.find(nutrient => nutrient.name === name);
      }).filter(nutrient => nutrient !== undefined);

      // Create the array of other filtered
      const otherNutrients = data.filter(nutrient =>
        !mainNutrientsList.includes(nutrient.name)
      );

      // Convert amounts to milligrams if necessary and sort
      const sortedOtherNutrients = [...otherNutrients]
        .map(nutrient => {
          // Convert micrograms to milligrams if necessary
          let convertedAmount = nutrient.amount;
          let unitName = nutrient.unitName.toLowerCase();

          if (unitName === 'ug' || unitName === 'µg') {
            convertedAmount = nutrient.amount / 1000; // Convert micrograms to milligrams
            unitName = 'Mg'; // Update the unit to milligrams
          }

          return {
            ...nutrient,
            convertedAmount, // Store the converted amount
            convertedUnit: unitName // Store the updated unit
          };
        })
        .sort((a, b) => b.convertedAmount - a.convertedAmount); // Sort by the converted amount in milligrams

    }
    fetchData();
  }, []);




  if (!groceriesData) {
    return (
      <h1>Loading</h1>
    )
  }


// MASONRY GRID preparation - Organise Grocery Items into 3 columns by every 3rd Grocery Item Category in robin-round fashion + Exact Category Order
const categoryOrder = [
  'Protein', 'Carbs', 'Veggies', 'Fats', 'Fruits', 
  'Nuts, Seeds & Dried Fruits', 'Teas', 
  'Herbs & Spices', 'Other', 'Supplements'
];

  const categorizedItems = groceriesData.reduce((acc, item) => {
    const { groceryCategory } = item;
    if (!acc[groceryCategory]) {
      acc[groceryCategory] = [];
    }
    acc[groceryCategory].push(item);
    return acc;
  }, {});

  const columns = [[], [], []];
  
  categoryOrder.forEach((category, index) => {
    const columnIndex = index % 3; // Determine the column index (0, 1, 2)
    if (categorizedItems[category]) {
      columns[columnIndex].push({
        category,
        items: categorizedItems[category]
      });
    }
  });


  const handleOnGroceryClick = (grocery) => {
    setSelectedGrocery(grocery);
    console.log("Selected grocery: " + grocery.groceryName);
  }


  console.log(groceriesData)


  return (
    <div>
      <GroceriesTabsNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="groceries-wrap">
        <button onClick={() => setListMode(prevListMode => !prevListMode)}>LIST MODE</button>
        {listMode
          ? (
            <div className="list-mode-wrap">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="list-column">
                  {column.map(({ category, items }) => (
                    <ul key={category} className="list-mode-active">
                      <h3>{category.toUpperCase()}</h3>
                      {items.map(groceryData => (
                        <li key={groceryData.id}>
                          <GroceryBox 
                            groceryData={groceryData} 
                            onClick={() => handleOnGroceryClick(groceryData)}
                          />
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          )
          : (
            <ul className="flex">
              {groceriesData
                .filter(groceryData => !activeTab || activeTab === groceryData.groceryCategory)
                .map(groceryData => (
                  <li>
                    <GroceryBox 
                      groceryData={groceryData} 
                      onClick={() => handleOnGroceryClick(groceryData)}
                    />
                  </li>
                ))}
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default Groceries;

