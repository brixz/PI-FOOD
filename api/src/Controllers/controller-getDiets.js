const axios = require('axios');
const {TypesDiet} = require('../db.js');
//const {getDiets} = require('../getData.js');
require('dotenv').config();
const { APY_KEY4 } = process.env;

const findOrCreateDiets = async (req, res) => {
    try {
        const info = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APY_KEY4}&addRecipeInformation=true&number=100`
        );
        const types = info.data?.results.map((e) => e.diets);
        const newTypes = types.flat().concat("vegetarian", "ketogenic");
        const finalTypes = [...new Set(newTypes)];
    
        console.log(newTypes);
    
        for (let element in finalTypes) {
          TypesDiet.findOrCreate({
            where: { title: finalTypes[element] },
          });
        }
    
        const newDiets = await TypesDiet.findAll();
        res.status(200).json(newDiets);
      } catch (error) {
        console.log(error);
      }
}

module.exports = findOrCreateDiets;