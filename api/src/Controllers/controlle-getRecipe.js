const {Recipe} = require('../db.js');
const {getAllData, getId}= require('../getData.js');
const { get } = require('../routes/Diets.js');

const findAllRecipeName = async (req, res)=>{
    const {name} = req.query;
    const recipes = await getAllData();
   console.log(recipes)
    if(name){
        const recipeByName = await recipes.filter(rec => rec.title.toLowerCase().includes(name.toLowerCase()))
    //    recipeByName?res.status(201).json(recipeByName.title)
    //    :res.status(401).send("receta no encontrada");
    // return res.status(201).json(recipeByName);
    if(recipeByName.length > 0){
        return res.status(201).json(recipeByName)
     }else{
        res.status(401).send("receta no encontrada");
     }
    }
    else{
    const orderRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title))
    res.json(orderRecipes);}
    
}

const findIdRecipe = async(req, res)=>{
try {
    const {id} = req.params;
    if(id){
    let recipe = await getId(id);
    recipe?res.status(201).json(recipe)
    : res.status(401).send("receta no encontrada");
    }else{
      return  res.send("Receta no encontrada")
    }
} catch (error) {
   res.send(error) 
}
}
const createRecipe = async(req, res)=>{
    const { title, summary, healthScore, steps, diets, image}= req.body;
    try{
        if(!title|| !summary || !healthScore || !steps || !diets || !image){return res.status(404).send("Faltan parametros")}
        const newRecipe = await Recipe.create({ title: title, summary: summary, healthScore: healthScore, steps: steps, image: image})
        res.status(201).send(newRecipe);
    }
    catch(error){
        res.status(404).send(error);
    }
}

module.exports={
    findAllRecipeName,
    findIdRecipe,
    createRecipe
}