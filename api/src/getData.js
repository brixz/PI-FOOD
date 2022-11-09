import axios from 'axios';
require('dotenv').config();
const { API_KEY } = process.env;
const { Recipe, TypesDiet } = require("./db.js");

const getApi= async()=>{
    let ApiData= []
    let recipe;
    const ApiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    ApiData.push(ApiData.data.result);
    recipe = ApiData;
    return(
        recipe.map(rec =>{
            const{id, name, summary,healthscore, image} = res;
            return{
                id,
                name,
                summary,
                healthscore,
                image
            }
        })
    )
}

const getDB = async()=>{
    const getAlldb = await Recipe.FindAll({
        where:{
            id,
            name,
            summary,
            healthscore
        }
    })
}

const AllData =async()=>{

}