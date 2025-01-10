import { useEffect, useState } from "react";

import { BACKEND_URL } from "../../../config/serverConfig";


function AddMeal() {
  const [groceries, setGroceries] = useState([]);
  const [selectedGroceries, setSelectedGroceries] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [hoveredGrocery, setHoveredGrocery] = useState(null);

  const imageUrl = `${import.meta.env.VITE_IMAGES_URL}`;

  useEffect(() => {
    // Fetch groceries from the backend to show in the popup
    async function fetchGroceries() {
      const response = await fetch(`${BACKEND_URL}/groceries/getGroceries`);
      const data = await response.json();
      setGroceries(data);
    }

    fetchGroceries();
  }, []);


  // Handle grocery selection
  const handleGrocerySelect = (grocery) => {
    if (selectedGroceries.some(item => item.groceryId === grocery.groceryId)) {
      setSelectedGroceries(selectedGroceries.filter(item => item.groceryId !== grocery.groceryId));
    } else {
      setSelectedGroceries([...selectedGroceries, grocery]);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const filteredIngredients = selectedGroceries.map(grocery => ({
      groceryId: grocery.groceryId,
    }));

    const formData = new FormData(e.target);
    formData.append('ingredients', JSON.stringify(filteredIngredients));

    // Simple validation checks
    // if (!name || !fdcid || !category || !image) {
    //   alert("All fields are required!");
    //   return;
    // }

    // if (isNaN(fdcid)) {
    //   alert("FDCID must be a number");
    //   return;
    // }

    try {
      const response = await fetch(`${BACKEND_URL}/meals/addMeal`, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (err) {
      console.error('Error submitting the form:', err);
    }
  };

  const inputHandler = (e) => {
    console.log(e.target.value);
  }


  // MASONRY GRID preparation - Organise Grocery Items into 3 columns by every 3rd Grocery Item Category in robin-round fashion
  const categorizedItems = groceries.reduce((acc, item) => {
    const { groceryCategory } = item;
    if (!acc[groceryCategory]) {
      acc[groceryCategory] = [];
    }
    acc[groceryCategory].push(item);
    return acc;
  }, {});

  const columns = [[], [], []];
  const categories = Object.keys(categorizedItems);

  categories.forEach((category, index) => {
    const columnIndex = index % 3; // Determine the column index (0, 1, 2)
    columns[columnIndex].push({
      category,
      items: categorizedItems[category]
    });
  });



  const handleRemoveGrocery = (groceryId) => {
    setSelectedGroceries(selectedGroceries.filter(grocery => grocery.groceryId !== groceryId));
  };



  return (
    <>
      <form onSubmit={formSubmitHandler} className="flex flex-column add-grocery-form">
        <input type="text" name="name" placeholder="Meal Name" onChange={inputHandler} />
        <select required name="category">
          <option value="" selected disabled hidden>Select Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Main Course">Main Course</option>
          <option value="Snacks">Snacks</option>
          <option value="Smoothies / Shakes">Smoothies / Shakes</option>
          <option value="Salads">Salads</option>
          <option value="Soups / Stews / Potages">Soups / Stews / Potages</option>
          <option value="Other">Other</option>
        </select>
        <textarea rows="10" name="description" placeholder="Meal Description" onChange={inputHandler} />
        <input type="file" name="image" onChange={inputHandler} />
        {/* Button to trigger the popup */}
        <button type="button" onClick={() => setPopupVisible(true)}>Add Ingredients</button>

        {/* Show selected groceries */}
        <div className="flex meal-page-ingredients-wrap">

          {selectedGroceries.length > 0 ? (
            selectedGroceries.map((grocery, idx) => (
              <div
                className="flex align-center ingredient-box-wrap"
                onMouseEnter={() => {
                  setHoveredGrocery(grocery.groceryId);
                }}
                onMouseLeave={() => setHoveredGrocery(null)}
              >
                <img src={`${imageUrl}${grocery.groceryImage}`} className="ingredient-box-img-th" />
                <div className="ingredient-box-heading-wrap">
                  <h4 className="ingredient-box-heading">{grocery.groceryName}</h4>
                </div>
                {hoveredGrocery === grocery.groceryId && (
                  <button
                    className="remove-ingredient-btn"
                    onClick={() => handleRemoveGrocery(grocery.groceryId)}
                  >
                    X
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>No ingredients selected</p>
          )}
        </div>
        <div className="flex add-meal__checkbox-wrap">
          <label htmlFor="fastingMeal" className="flex align-center">Fasting Meal</label>
          <input
            type="checkbox"
            name="fastingMeal"
          />
        </div>
        <input type="submit" value="Add Meal" />
      </form>

      {/* Popup for selecting groceries */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="add-meal-popup">
            <button type="button" onClick={() => setPopupVisible(false)}>X</button>
            <div className="list-mode-wrap">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="list-column">
                  {column.map(({ category, items }) => (
                    <ul key={category} className="list-mode-active">
                      <h3>{category.toUpperCase()}</h3>
                      {items.map(grocery => (
                        <div key={grocery.groceryId} className="flex add-meal-popup__groceries-wrap">
                          <input
                            type="checkbox"
                            checked={selectedGroceries.some(selected => selected.groceryId === grocery.groceryId)}
                            id={`grocery-${grocery.groceryId}`}
                            value={grocery.groceryId}
                            onChange={() => handleGrocerySelect(grocery)}
                          />
                          <label htmlFor={`grocery-${grocery.groceryId}`} className="flex align-center">
                            <img
                              className="ingredient-box-img-th"
                              src={`${imageUrl}${grocery.groceryImage}`}
                              alt="Eggs"
                            />
                            {grocery.groceryName}
                          </label>
                        </div>
                      ))}
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddMeal;