const Meal = require("../models/mealModel");


exports.addMeal = async (req, res) => {
  try {
    const { name, category, ingredients, description, 'fastingMeal': fastingMeal } = req.body;
    const image = req.file ? req.file.filename : '';

    const parsedIngredients = JSON.parse(ingredients);

    const ingredientsArray = parsedIngredients.map(grocery => grocery.groceryId);

    const newMeal = new Meal({
      name,
      category,
      ingredients: ingredientsArray,
      description,
      image,
      ...(fastingMeal === 'true' && { fastingMeal: true })
    });

    await newMeal.save();

    res.status(201).json({ message: 'Meal added successfully', newMeal });
  } catch (error) {
    console.error('Error adding meal:', error);
    res.status(500).json({ message: 'Error adding meal', error });
  }
}

exports.getMeals = async (req, res) => {
  try {
    const data = await Meal.find();
    res.send(data);

  } catch (error) {
    console.error('Error fetching meals from database:', error);
  }
}