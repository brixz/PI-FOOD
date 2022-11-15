import {GET_ALL_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_ALL_DIETS, CREATE_RECIPE } from './actionstypes';

const InitialState = {
        allrecipes: [],
        recipe:[],
        diets: []  
}

const rootReducer =(state = InitialState,action)=>{
    switch (action.type) {
        case GET_ALL_RECIPES:    
        return { ...state, 
            allrecipes: action.payload
        } 
        case GET_RECIPE_BY_NAME:    
        return { ...state, 
            recipe: action.payload
        }
        case GET_RECIPE_BY_ID:    
        return { ...state, 
            recipe: action.payload
        }
        case GET_ALL_DIETS:    
        return { ...state, 
            diets: action.payload
        }
        case CREATE_RECIPE:    
        return { ...state, 
            recipe: action.payload
        }
    default: return {...state}    
    }
}

export default  rootReducer;