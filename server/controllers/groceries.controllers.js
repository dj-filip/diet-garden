const Grocery = require("../models/groceryModel");


exports.addGrocery = async (req, res) => {
  try {
    const { name, fdcid, category } = req.body;
    const image = req.file ? req.file.filename : '';

    const newGrocery = new Grocery({
      name,
      fdcid,
      category,
      image
    });

    await newGrocery.save();

    res.status(201).json({ message: 'Grocery added successfully', newGrocery });
  } catch (error) {
    res.status(500).json({ message: 'Error adding grocery', error });
  }
}


exports.getGroceries = async (req, res) => {

  const fetchedGroceries = [];

  try {
    // Check if there are any query parameters
    if (req.query.ids) {
      const ids = Array.isArray(req.query.ids) ? req.query.ids : [req.query.ids]; // Ensure `ids` is always an array
      const ingredients = await Grocery.find({ _id: { $in: ids } }); // Fetch groceries by array of IDs
      res.status(200).json(ingredients); // Send the found groceries
    } else {
      // If no IDs are provided, fetch all groceries
      const allGroceries = await Grocery.find();

      for (const grocery of allGroceries) {
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
      res.status(200).json(fetchedGroceries);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching groceries', error });
  }
}
