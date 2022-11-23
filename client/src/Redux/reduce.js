import { ERROR } from './actions';
import {GET_ALL_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_ALL_DIETS, CREATE_RECIPE, FILTER_BY_DIETS, ORDER_BY_SCORE,ORDER_BY_NAME } from './actionstypes';


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
            recipesCopyState: action.payload
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
            const recipesWithDiet = action.payload === 'default' ? recipes
            :recipes.filter((r) =>{
                    let names = r.diets.map((d) =>{return d})
                    if (names.includes(action.payload)) return r
                })
            return {
                ...state,
                allrecipes: recipesWithDiet
            }
        case ORDER_BY_SCORE:
                const recipesByScore = action.payload === 'asc' ?
                    state.allrecipes.sort((a, b) => {
                        if (a.healthScore > b.healthScore) return 1;
                        if (b.healthScore > a.healthScore) return -1;
                        return 0;
                    }) :
                    state.allrecipes.sort((a, b) => {
                        if (a.healthScore > b.healthScore) return -1;
                        if (b.healthScore > a.healthScore) return 1;
                        return 0;
                    });
                return {
                    ...state,
                    allrecipes: recipesByScore
                }
        case ORDER_BY_NAME:
                const recipesSorted = action.payload === 'desc' ?
                    state.allrecipes.sort((a, b) => {
                            if (a.name > b.name) return 1;
                            if (b.name > a.name) return -1;
                            return 0;
                        }) 
                    : state.allrecipes.sort((a, b) => {
                        if (a.name > b.name) return -1;
                        if (b.name > a.name) return 1;
                        return 0;
                    });
                    return {
                        ...state,
                        allrecipes: recipesSorted
                    }
    default: return {...state}    
    }
}
export default rootReducer;