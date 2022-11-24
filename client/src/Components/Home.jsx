import React,{useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllRecipes, getAllDiets, filteByDiets, orderByScore, orderByName} from "../Redux/actions";
import CardRecipe from "./CardRecipe.jsx";
import './home.css';
import Paginado from "./Paginado.jsx";
import SearchBar from "./Search.jsx";

export default function Home(){
    const dispatch = useDispatch();
    const recipes = useSelector(state=> state.allrecipes);
    const diets = useSelector(state => state.diets);
    const[valid, setValid] = useState(true)

    const [currentPage, setcurrentPage]= useState(1);
    const [recipeForPage] = useState(9);
    const ultimoRecipe = currentPage * recipeForPage;
    const primerRecipe = ultimoRecipe - recipeForPage;
    const currentRecipes = recipes.slice(primerRecipe, ultimoRecipe); 

    const paginado = (numberpage)=>{
         setcurrentPage(numberpage)
     }

    useEffect(() => {
        dispatch(getAllRecipes());
        //return dispatch;
     }, [dispatch]) 
     
    useEffect(() => {
      dispatch(getAllDiets());
    }, [dispatch])

    function handleFilterByDiets(e) {
      dispatch(filteByDiets(e.target.value))
    };

    function handleOrderByScore(e) {
      dispatch(orderByScore(e.target.value))
      valid ? setValid(false) : setValid(true)
  };
  function handleOrderByName(e) {
    dispatch(orderByName(e.target.value))
    valid ? setValid(false) : setValid(true)
};

     if(recipes.length){
      return(
        <div>
          <SearchBar/>
          <Paginado recipeForPage={recipeForPage} recipes={recipes.length} paginado={paginado} />
          <select onChange={e => handleOrderByName(e)} defaultValue='default'>
                    <option value="default" disabled >Alphabetical order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
          </select>
          <select onChange={e => handleOrderByScore(e)} defaultValue='default'>
                    <option value="default" disabled >Order by score</option>
                    <option value="desc">Higher</option>
                    <option value="asc">Lower</option>
          </select>
          <select onChange={e => handleFilterByDiets(e)} defaultValue='default'>
                    <option value="default" disabled>Select by diet type</option>
                    <option value="default" >All</option>
                    {
                        diets && diets.map(d => (
                            <option value={d.title} key={d.id}>{d.title}</option>
                        ))
                    }
          </select>
        {
                currentRecipes?.map(el =>{
                return(
                 <CardRecipe title={el.title} diets={el.diets} image={el.image} id={el.id} key={el.id} /> 
               )
           })
        }   
        </div>
      )
    } else{
     return (
        <h>Loading...</h>
      )
    }
}