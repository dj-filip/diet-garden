import mongoose, { Schema, Document, Model, ObjectId } from 'mongoose';

// Define the nutrient schema
export interface Nutrient {
  name: string;
  amount: number;
  unitName: string;
}

const nutrientSchema: Schema = new Schema<Nutrient>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    unitName: {
      type: String,
      required: true,
    },
  },
  { _id: false } // Don't create an _id for each nutrient
);

// Define the grocery schema interface
export interface Grocery extends Document {
  _id: ObjectId;
  name: string;
  fdcid: string;
  category: 'Protein' | 'Carbs' | 'Veggies' | 'Fats' | 'Fruits' | 'Nuts, Seeds & Dried Fruits' | 'Teas' | 'Herbs & Spices' | 'Other' | 'Supplements';
  image: string;
  nutrients: {
    energy: Nutrient[];
    macronutrients: Nutrient[];
    vitamins: Nutrient[];
    minerals: Nutrient[];
  };
}

// Define the grocery schema
const grocerySchema: Schema = new Schema<Grocery>(
  {
    name: {
      type: String,
      required: [true, 'Please enter a grocery name'],
    },
    fdcid: {
      type: String,
      required: [true, 'Please enter a grocery fdcid'],
    },
    category: {
      type: String,
      enum: [
        'Protein',
        'Carbs',
        'Veggies',
        'Fats',
        'Fruits',
        'Nuts, Seeds & Dried Fruits',
        'Teas',
        'Herbs & Spices',
        'Other',
        'Supplements',
      ],
      required: true,
    },
    image: {
      type: String,
      required: [true, 'Please add a grocery image'],
    },
    nutrients: {
      energy: [nutrientSchema],
      macronutrients: [nutrientSchema],
      vitamins: [nutrientSchema],
      minerals: [nutrientSchema],
    },
  },
  {
    timestamps: true,
  }
);

// Create the model
export const GroceryModel: Model<Grocery> = mongoose.models.Grocery || mongoose.model<Grocery>('Grocery', grocerySchema);
