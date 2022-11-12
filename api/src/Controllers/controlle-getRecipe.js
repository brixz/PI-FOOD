const {Recipe} = require('../db.js');
const {getAllData}= require('../getData.js')

const findAllRecipeName = async (req, res)=>{
    const {name} = req.query.name;
    let recipes = await getAllData();
    if(name){
       const recipeByName = recipes.filter(rec => rec.title.toLowerCase().includes(name.toLowerCase()))
        return res.send(recipeByName);
    }
    const orderRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title))
    res.json(orderRecipes);
}

module.exports={
    findAllRecipeName,
}