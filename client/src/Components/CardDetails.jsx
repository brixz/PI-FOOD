import React from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../Redux/actions";
import { useEffect } from "react";

export default function CardDetail(props){
    console.log(props)
    const dispatch = useDispatch;
    const recipe = useSelector(state => state.detail)
    useEffect(()=>{
        dispatch(getRecipeById(props.match.params.id));
    },[dispatch]);
    
    return (
    <div>
        {
            recipe.length ?
              <div>
                <h1>{props.title}</h1>
                
                <p>{props.summary}</p>
                <p>{props.healthScore}</p>
              </div> : <h>Loading..</h>
        }
        <Link to='/home'>
            <button>back</button>
        </Link>
    </div>
 )
};