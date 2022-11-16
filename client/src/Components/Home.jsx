import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllRecipes } from "../Redux/actions";
import CardRecipe from "./CardRecipe.jsx";

export default function Home(){
    const dispatch = useDispatch();
    const recipes = useSelector((state)=> state.allrecipes);

    useEffect(() => {
        dispatch(getAllRecipes());
        return dispatch;
     }, [dispatch])  
 return(
        <div>
            <h1>Las mejores recetas...</h1>
              {
            recipes.payload?.map(el =>{
               return(
                 <CardRecipe title={el.title} diets={el.diets} image={el.image} id={el.id} /> 
               )
           })
       }
        </div>
      )
}