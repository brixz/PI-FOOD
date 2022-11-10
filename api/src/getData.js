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
            //const{id, name, summary,healthscore, image, step} = res;
            return {
                id:rec.id,
                name: rec.name,
                summary: rec.summary,
                healthscore: rec.healthscore,
                image: rec.image,
                step: rec.map,
            }
        })
    )
}

// const getDB = async()=>{
//     const getAlldb = await Recipe.FindAll({
//         where:{
//             id,
//             name,
//             summary,
//             healthscore,
//             step
//         }
//     })
// }

// const AllData =async()=>{
//     const api = await getApi();
//     const db = await getDB();
    
// }
const getDiets = async ()=>{
    const data = (await getApi()).map(el =>{
        return {
            name
        }
    })
}
module.exports={
    getApi,
}