import axios from 'axios';
require('dotenv').config();
const { API_KEY } = process.env;
const { Recipe, TypesDiet } = require("./db.js");

const getApi= async()=>{
    let ApiData= []
    let recipe;
    const ApiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    ApiData.push(ApiInfo.data.result);
    recipe = ApiData;
    return(
        recipe.map((rec)=>{
            //const{id, name, summary,healthscore, image, step} = res;
            return {
                id:rec.id,
                title: rec.title,
                summary: rec.summary,
                healthscore: rec.healthScore,
                diets: rec.diets.map((e) => e.title),
                image: rec.image,
                steps: rec.analyzedInstructions[0]?.steps.map((e) => e.step),
                dishTypes: e.dishTypes,
            }
        })
    )
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
        diets: e.diets.map((e) => e.title),
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

const getDiets = async ()=>{
 const datdiet  = await getApi().map(el=>{
    return el.diets
 });
 return datdiet;
}

module.exports={
    getApi,
    getDB,
    getAllData,
    getDiets
}