import mongoose, { Model, ObjectId, Schema } from "mongoose";


export interface Meal {
  _id: ObjectId,
  name: string,
  category: 'Breakfast' | 'Main Course' | 'Snacks' | 'Smoothies / Shakes' | 'Salads' | 'Soups / Stews / Potages' | 'Other',
  ingredients: string,
  description: string,
  image: string,
  fastingMeal: boolean
}


const mealSchema = new Schema<Meal>(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['Breakfast', 'Main Course', 'Snacks', 'Smoothies / Shakes', 'Salads', 'Soups / Stews / Potages', 'Other'],
      reqired: true
    },
    ingredients: {
      type: String
    },
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
)

// Create the model
export const MealModel: Model<Meal> = mongoose.models.Meal || mongoose.model<Meal>('Meal', mealSchema);
