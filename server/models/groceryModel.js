const mongoose = require('mongoose');


// Define the nutrient sub-schema
const nutrientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    unitName: {
      type: String,
      required: true
    }
  },
  { _id: false } // Don't create an _id for each nutrient
);



const grocerySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a grocery name"]
    },
    fdcid: {
      type: Number,
      required: [true, "Please enter a grocery fdcid"]
    },
    category: {
      type: String,
      enum: ['Protein', 'Carbs', 'Veggies', 'Fats', 'Fruits', 'Nuts, Seeds & Dried Fruits', 'Teas', 'Herbs & Spices', 'Other', 'Supplements'],
      required: true
    },
    image: {
      type: String,
      required: [true, "Please add a grocery image"]
    },
    nutrients: {
      energy: [nutrientSchema],
      macronutrients: [nutrientSchema],
      vitamins: [nutrientSchema],
      minerals: [nutrientSchema]
    }
  },
  {
    timestamps: true
  }
)

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;