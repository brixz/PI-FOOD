import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
//import { Link } from "react-router-dom";
import { getRecipeById } from "../Redux/actions";


export default function CardDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getRecipeById(id));
    }, [dispatch,id]);

    const detailedRecipe = useSelector(state => state.detail)
    console.log(detailedRecipe)

    
            
if(detailedRecipe.length > 0){  
            return ( 
                 <div>
                        <h1>{detailedRecipe.title}</h1>
                        <div>
                            <img src={detailedRecipe.image} alt='img not found'
                                width="500px" height="400px"  />
                        </div>
                        <div>
                            <h3>Score: {detailedRecipe.healthScore}  </h3>
                            <h3 >Healthy-Food level: {detailedRecipe.healthScore} </h3>
                            <h3>Step-by-step:{detailedRecipe.instructions} </h3>
                            <h3>Summary:{detailedRecipe.summary} </h3>
                            <h3>Diet types:</h3><ul>{detailedRecipe.diets.map(d => <li>{d}</li>)}</ul>
                        </div>
                </div> )
                    }else{
                        return (
                        <div>
                            <p>Loading...</p>
                        </div>);
                    }         
};