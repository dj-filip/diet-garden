const express = require('express');
const router = express.Router();

const groceriesRoutes = require('./groceries.routes');
const mealsRoutes = require('./meals.routes');


router.use('/groceries', groceriesRoutes);
router.use('/meals', mealsRoutes);



// // GET GROCERIES
// router.get('/getGroceries', async (req, res) => {
//   const data = await fetchData();
//   res.send(data);
// });


// // ADD GROCERIES
// const groceryStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/images/groceries/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// })


// const groceryUpload = multer({ storage: groceryStorage });

// router.post('/addGrocery', groceryUpload.single('image'), async (req, res) => {
//   try {
//   const { name, fdcid, category } = req.body;
//   const image = req.file ? req.file.filename : '';

//   const newGrocery = new Grocery({
//     name,
//     fdcid,
//     category,
//     image
//   });

//   await newGrocery.save();

//   res.status(201).json({ message: 'Grocery added successfully', newGrocery });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding grocery', error });
//   }
// });


// // ADD MEALS
// const mealStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/images/meals/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// })

// const mealUpload = multer({ storage: mealStorage });

// router.post('/addMeal', mealUpload.single('meal'), async (req, res) => {
//   console.log(req.body);
//   try {
//   const { name, category, ingredients, description, 'fastingMeal': fastingMeal } = req.body;
//   const image = req.file ? req.file.filename : '';

//   const parsedIngredients = JSON.parse(ingredients);

//   const ingredientsArray = parsedIngredients.map(grocery => grocery.groceryId);

//   const newMeal = new Meal({
//     name,
//     category,
//     ingredients: ingredientsArray,
//     description,
//     image,
//     ...(fastingMeal === 'true' && { fastingMeal: true })
//   });

//   await newMeal.save();

//   res.status(201).json({ message: 'Meal added successfully', newMeal });
//   } catch (error) {
//     console.error('Error adding meal:', error);
//     res.status(500).json({ message: 'Error adding meal', error });
//   }
// })


module.exports = router;