
const Grocery = require("../models/groceryModel");

const BASE_URL = 'https://api.nal.usda.gov/fdc/v1/food/';
const API_KEY = 'vxdzYBw5AbIUS4WVudGo8E7pYrgR73TGEXf0tav0';

const fetchData = async () => {
  const fetchedGroceries = [];

  try {
    const groceries = await Grocery.find();

    for (const grocery of groceries) {
      const { _id: groceryId, name: groceryName, fdcid: groceryFDCID, category: groceryCategory, image: groceryImage, nutrients: groceryNutrients } = grocery;

      // Create the grocery object with the desired schema
      const groceryData = {
        groceryId,
        groceryName,
        groceryCategory,
        groceryNutrients,
        groceryImage
      };

      // Save the grocery data to the array
      fetchedGroceries.push(groceryData);
    }
  } catch (error) {
    console.error('Error fetching groceries from database:', error);
  }
  return fetchedGroceries;
};

module.exports = { fetchData };