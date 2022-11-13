const {Recipe} = require('../db.js');
const {getAllData}= require('../getData.js')

const findAllRecipeName = async (req, res)=>{
    try{
    const {name} = req.query;
    let recipes = await getAllData();
   
    if(name){
       let recipeByName = await recipes.filter(rec => rec.title.toLowerCase().includes(name.toLowerCase()))
       recipeByName.length
        ? res.status(201).json(recipeByName)
        : res.status(401).send("receta no encontrada");
    }else{
    const orderRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title))
    res.json(orderRecipes);}}
    catch(err){
        console.log(err);
    }
}
const findIdRecipe = async(req, res)=>{
try {
    const {id} = req.params;
    if(id){
    let recipes = await getAllData();
    const recipeforId = recipes.filter(el => el.id === id);
    return res.sen(recipeforId)}
    else{
      return  res.send("Receta no encontrada")
    }
} catch (error) {
   res.send(error) 
}
}

module.exports={
    findAllRecipeName,
    findIdRecipe,
}