const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, require: true, unique:true},
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef', 'Grandma'] },
  ingredients: { type: Array },
  cuisine: {type: String, required: true},
  dishType: {type: String, enum: ['breakfast', 'meal', 'soup', 'snack', 'drink', 'dessert']},
  image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: {type: Number, min: 0},
  creator: {type: String},
  created: {type: Date, default: Date.now}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;