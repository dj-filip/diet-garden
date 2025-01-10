const mongoose = require('mongoose');

const mealSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['Breakfast', 'Main Course', 'Snacks', 'Smoothies / Shakes', 'Salads', 'Soups / Stews / Potages', 'Other'],
      required: true
    },
    ingredients: [{
      type: String 
    }],
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    fastingMeal: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;