// One-time script for adding Nutrients to Groceries in DB

const mongoose = require("mongoose");
const Grocery = require("../models/groceryModel");


const fetchData = async () => {
  const fetchedGroceries = [];


  const categories = {
    energy: ['208'], // Energy, Energy (Atwater General Factors)
    macronutrients: [
      '203', // Protein
      '204', // Total lipid (fat)
      '205', // Carbohydrate, by difference
      '291', // Fiber, total dietary
    ],
    vitamins: [
      '320', // Vitamin A, RAE
      '401', // Vitamin C, total ascorbic acid
      '324', // Vitamin D (D2 + D3)
      '323', // Vitamin E (alpha-tocopherol)
      '430', // Vitamin K (phylloquinone)
      '404', // Thiamin
      '405', // Riboflavin
      '406', // Niacin
      '410', // Pantothenic acid
      '415', // Vitamin B-6
      '417', // Folate, total
      '418', // Vitamin B-12
      '421', // Choline, total
      '321', // Carotene, beta
    ],
    minerals: [
      '301', // Calcium, Ca
      '303', // Iron, Fe
      '304', // Magnesium, Mg
      '305', // Phosphorus, P
      '306', // Potassium, K
      '307', // Sodium, Na
      '309', // Zinc, Zn
      '312', // Copper, Cu
      '315', // Manganese, Mn
      '317', // Selenium, Se
      '325', // Iodine, I (Hypothetical, as iodine may not have a fixed number)
    ],
  };


  // try {
  //   const groceries = await Grocery.find();

  //   for (const grocery of groceries) {
  //     const { _id: groceryId, name: groceryName, fdcid: groceryFDCID, category: groceryCategory, image: groceryImage } = grocery;
  //     const URL = `${BASE_URL}/${groceryFDCID}?api_key=${API_KEY}&format=abridged`;

  //     try {
  //       const response = await fetch(URL);
  //       const data = await response.json();


  //       const categorizeNutrients = (categories) => {
  //         const categorized = {
  //           energy: [],
  //           macronutrients: [],
  //           vitamins: [],
  //           minerals: [],
  //         };

  //         data.foodNutrients.forEach(nutrient => {
  //           for (const [category, nutrientNumbers] of Object.entries(categories)) {
  //             if (nutrientNumbers.includes(nutrient.number)) {
  //               categorized[category].push({
  //                 name: nutrient.name,
  //                 amount: nutrient.amount,
  //                 unitName: nutrient.unitName,
  //               });
  //               break;
  //             }
  //           }
  //         });

  //         return categorized;
  //       };


  //       const categorizedNutrients = categorizeNutrients(categories);


  //       // Add grocery nutrients in db
  //       grocery.nutrients = categorizedNutrients;
  //       await grocery.save();

  //       console.log(`Updated grocery: ${groceryName}`);

  //     } catch (error) {
  //       console.error(`Error fetching data for ${groceryName}:`, error);
  //     }
  //   }
  // } catch (error) {
  //   console.error('Error fetching groceries from database:', error);
  // }


  // Update Individual Groceries by ID
  try {

    // const groceries = [
    //   66f40c389f9381b33c38ce00
    // ]

    const grocery = await Grocery.findById("6776b4b74e976d10bf74941a");

    const { _id: groceryId, name: groceryName, fdcid: groceryFDCID, category: groceryCategory, image: groceryImage } = grocery;
    const URL = `${FOOD_DATA_BASE_URL}/${groceryFDCID}?api_key=${FOOD_DATA_API_KEY}&format=abridged`;

    try {
      const response = await fetch(URL);
      const data = await response.json();


      const categorizeNutrients = (categories) => {
        const categorized = {
          energy: [],
          macronutrients: [],
          vitamins: [],
          minerals: [],
        };

        data.foodNutrients.forEach(nutrient => {
          for (const [category, nutrientNumbers] of Object.entries(categories)) {
            if (nutrientNumbers.includes(nutrient.number)) {
              categorized[category].push({
                name: nutrient.name,
                amount: nutrient.amount,
                unitName: nutrient.unitName,
              });
              break;
            }
          }
        });

        return categorized;
      };


      const categorizedNutrients = categorizeNutrients(categories);


      // Add grocery nutrients in db
      grocery.nutrients = categorizedNutrients;
      await grocery.save();

      console.log(`Updated grocery: ${groceryName}`);

    } catch (error) {
      console.error(`Error fetching data for ${groceryName}:`, error);
    }
  } catch (error) {
    console.error('Error fetching groceries from database:', error);
  }
};


const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await fetchData();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await mongoose.disconnect();
  }
}

main();