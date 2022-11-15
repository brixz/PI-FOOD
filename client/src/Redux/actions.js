import axios from 'axios';
import {GET_ALL_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_ALL_DIETS, CREATE_RECIPE } from './actionstypes';

export const getAllRecipes =()=>{
    return async function (dispatch){
        const recipes = await axios.get('http://localhost:3001/recipes');
        return dispatch({type:GET_ALL_RECIPES, payload: recipes.data});
    }
} 

export const getRecipeByName= (name)=>{
    return async function(dispatch){
        try {
            const recipe = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({type:GET_RECIPE_BY_NAME, payload:recipe.data})
        } catch (error) {
            return dispatch({type: GET_RECIPE_BY_NAME, payload: error})            
        }
    }
}

export const getRecipeById= (id)=>{
    return async function(dispatch){
        try {
            const recipe = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({type:GET_RECIPE_BY_ID, payload:recipe.data})
        } catch (error) {
            return dispatch({type: GET_RECIPE_BY_ID, payload: error})            
        }
    }
}

export const getAllDiets= ()=>{
    return async function(dispatch){
        try {
            const diets = await axios.get(`http://localhost:3001/diets`)
            return dispatch({type:GET_ALL_DIETS, payload:diets.data})
        } catch (error) {
            return dispatch({type: GET_ALL_DIETS, payload: error})            
        }
    }
}

export const postCreateRecipe= (Recipe)=>{
    return async function(dispatch){
        try {
            const recipe = await axios.post(`http://localhost:3001/recipes`, Recipe)
            return dispatch({type:CREATE_RECIPE, payload:recipe.data})
        } catch (error) {
            return dispatch({type: CREATE_RECIPE, payload: error})            
        }
    }
}