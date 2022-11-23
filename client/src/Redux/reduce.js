import { ERROR } from './actions';
import {GET_ALL_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_ALL_DIETS, CREATE_RECIPE, FILTER_BY_DIETS } from './actionstypes';


const InitialState = {
        allrecipes: [],
        recipesCopyState:[],
        diets: [] ,
        detail:[],
        error:{}
}

const rootReducer =(state=InitialState, action)=>{
    switch (action.type) {
        case GET_ALL_RECIPES:    
        return { ...state, 
            allrecipes: action.payload,
            recipesCopyState
        } 
        case GET_RECIPE_BY_NAME:    
        return { ...state, 
            allrecipe: action.payload
        }
        case GET_RECIPE_BY_ID:    
        return { ...state, 
            detail: action.payload
        }
        case GET_ALL_DIETS:    
        return { ...state, 
            diets: action.payload
        }
        case CREATE_RECIPE:    
        return { ...state, 
            recipe: action.payload
        }
        case ERROR:
            return{...state,
            error: action.payload}
        case FILTER_BY_DIETS:
            const recipes = state.recipesCopyState
            const recipesWithDiet = action.payload === 'all' ? recipes :
                recipes.filter(r => {
                    let names = r.diets.map(d => d)
                    if (names.includes(action.payload)) return r
                })
            return {
                ...state,
                recipes: recipesWithDiet
            }
    default: return {...state}    
    }
}
export default rootReducer;