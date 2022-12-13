import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
//import { Link } from "react-router-dom";
import { getRecipeById } from "../Redux/actions";
import s from './cardDetail.module.css'

export default function CardDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getRecipeById(id));
    }, [dispatch,id]);

    const detailedRecipe = useSelector(state => state.detail)
    console.log(detailedRecipe)
   

 if(detailedRecipe){
    function back(){
        window.history.back(-1);
    }
   
    return(
        <div className="conteiner">
            
            <h1>{detailedRecipe.title}</h1>
            <img src={detailedRecipe.image} alt='img not fount' width='200px' height='200px'/>
            <p className={s.pp}>Type of dish:{detailedRecipe.dishTypes}</p>
            <p className={s.pp}>Type of Diets:{detailedRecipe.diets}</p>
            <p>Health Score:{detailedRecipe.healthScore}</p>
            <p className={s.summ}>Summary:{detailedRecipe.summary}</p>
            <p className={s.summ}>Steps:{detailedRecipe.instructions}</p>
            <div>
            <button type="buttonBack" value="Página anterior" onclick={back()}></button>
            </div>
        </div>
    )
 }else{
    return(
        <h>Loading...</h>
    )
 }         
};