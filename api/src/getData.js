const axios = require('axios');
require('dotenv').config();
const { APY_KEY } = process.env;
const { Recipe, TypesDiet } = require("./db.js");

const getApi = async ()=>{
    try{
    let recipe;
    const ApiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APY_KEY}&addRecipeInformation=true&number=100`)
    recipe = ApiInfo.data?.results.map(rec=>{
      return {
          title: rec.title,
          id: rec.id,
          summary: rec.summary,
          healthScore: rec.healthScore,
          diets: rec.diets,
          image: rec.image,
          steps: rec.analyzedInstructions[0]?.steps.map((e) => e.step),
          dishTypes: rec.dishTypes
      }})
        return recipe;
       }
    catch(err){
      console.log(err);
    }
}

const getDB = async()=>{
    let dbRecipes = await Recipe.findAll({
    include: {
        model: TypesDiet,
        attributes: ["title"],
        through: {
          attributes: [],
        },
      },
    });
  
    return dbRecipes.map((e) => {
      return {
        title: e.title,
        id: e.id,
        summary: e.summary,
        steps: e.steps,
        spoonacularScore: e.spoonacularScore,
        healthScore: e.healthScore,
        diets: e.diets,
        image: e.image,
        createdInDb: e.createdInDb,
      };
    });
}

const getAllData = async()=>{
    const api = await getApi();
    const db = await getDB();
    return api.concat(db);    
}

module.exports={
    getApi,
    getDB,
    getAllData,
}