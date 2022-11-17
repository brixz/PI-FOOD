import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllRecipes } from "../Redux/actions";
import CardRecipe from "./CardRecipe.jsx";

export default function Home(){
    const dispatch = useDispatch();
    const recipes = useSelector(state=> state.allrecipes);

    useEffect(() => {
        dispatch(getAllRecipes());
        //return dispatch;
     }, [dispatch])  
     if(recipes.length){
      return(
        <div>
        {
            recipes.map(el =>{
                return(
                 <CardRecipe title={el.title} diets={el.diets} image={el.image} id={el.id} key={el.id} /> 
               )
           })
        }   
        </div>
      )
    } else{
      return (
        <h1>Loading...</h1>
      )
    }
}