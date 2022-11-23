import axios from 'axios';
import {GET_ALL_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_ALL_DIETS, CREATE_RECIPE, FILTER_BY_DIETS, ORDER_BY_SCORE, ORDER_BY_NAME} from './actionstypes';
export const ERROR ='ERROR';

export const getAllRecipes =()=>{
    return async function (dispatch){
        try {
            const rec = await axios.get('http://localhost:3001/recipes');
            const recipes = rec.data;
            dispatch({type:GET_ALL_RECIPES, payload: recipes});
        } catch (error) {
            dispatch({type: ERROR, payload:error})
        }
       
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

export const postCreateRecipe=(Recipe)=>{
    return async function(dispatch){
        try {
            const recipe = await axios.post(`http://localhost:3001/recipes`, Recipe)
            const resul = recipe.data;
            return dispatch({type:CREATE_RECIPE, payload:resul})
        } catch (error) {
            return dispatch({type: CREATE_RECIPE, payload: error})            
        }
    }
}
export const filteByDiets=(payload)=>{
    return async function(dispatch){
    return (dispatch({ type:FILTER_BY_DIETS,
        payload})
    )
    }
}
export const orderByScore=(payload)=>{
    return async function(dispatch){
    return dispatch({
        type: ORDER_BY_SCORE,
        payload
    })
  }
}

export const orderByName=(payload)=>{
    return async function(dispatch){
return dispatch({type: ORDER_BY_NAME,
        payload}
        )
    }
};