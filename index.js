const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose.connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    Recipe.create({
      title: "Grandma's Chicken",
      level: "Grandma",
      ingridients:["chicken", "coriander", "Grandma's love"],
      cuisine: "Grandma's Brazilian cuisine",
      dishType: "meal",
      image: "",
      duration: 60,
      creator: "Best grandma ever"
    })

    Recipe.insertMany(data)
    console.log(`Log data inside db: ${data}`)
  })

    Recipe.findOneAndUpdate( {title: "Chocolate Chip Cookies"}, {duration:60}, {new: true})
      .then( () =>  {console.log ("update Carrot Cake")})

      Recipe.deleteOne( { title: "Orange and Milk-Braised Pork Carnitas"})
        .then( () => {console.log('Deleted Orange and Milk-Braised Pork Carnitas')})
    
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

mongoose.connection.close()