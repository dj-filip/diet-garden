const express = require('express');
const router = express.Router();

const { addMeal, getMeals } = require('../controllers/meals.controllers');
const { mealUpload } = require('../middlewares/uploadMiddleware');


router.post('/addMeal', mealUpload.single('image'), addMeal);
router.get('/getMeals', getMeals);

module.exports = router;
