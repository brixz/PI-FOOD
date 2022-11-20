import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreateRecipe } from "../Redux/actions";
import './form.css';

export default function Form(){
    const dispatch = useDispatch();
    const mensaje = useSelector(state => state.recipe);
    const errors = useSelector(state => state.error);

const[Input,setInput]= useState({
    title:"",
    summary:"",
    healthScore:0,
    steps:[],
    diets:[],
    image:"",
})
const[error,setError] = useState({});

    const handleSumit =(event)=>{
        event.preventDefault()
        if(!Object.keys(error).length){
            dispatch(postCreateRecipe(Input));
            setInput({
                title:"",
                summary:"",
                healthScore:0,
                steps:[],
                diets:[],
                image:"",  
            })
        }
        else{
            alert("You must complete the entire form")
        }
        // const recipes={
        //     title:document.querySelector("input[name='title']").value,
        //     summary:document.querySelector("input[name='summary']").value,
        //     healthscore:document.querySelector("input[name='healthscore']").value,
        //     image:document.querySelector("input[name='image']").value
        // }
       
    }

    useEffect(()=>{
        setError(validateInfo(Input))
    },[Input])

    const validateInfo = (input)=>{
        const error = {};
        if(!input.title.length) error.title = "you must enter a title"
        if(!input.summary.length) error.summary = "you must enter an summary"
        if(!input.healthScore.length)error.healthScore = "you must enter an health score"
        if(!input.steps.length) error.steps = "you must enter the steps"
        if(!input.diets.length) error.diets  = "you must enter the types of diets"
        if(!input.image.length) error.image = "you must enter an image"
        return error;
    }
    
    const handleChange =(event)=>{
        setInput({
            ...Input,
        [event.target.name]: event.target.value})
        
    }
    return(
        <div className="forr">
            {console.log(mensaje)}
            {console.log(errors)}
            <h3>Create a recipe</h3>
            <form onSubmit={handleSumit}>
                <div className="conteiner">
                    <label className="label" htmlFor="title">Name:</label>
                    <input type='text' name='title' value={Input.title} onChange={handleChange} /> 
                    <p>{error.title && error.title}</p>
                </div>
                <div className="conteiner">
                    <label className="label" htmlFor="summary">Summary:</label>
                    <input type='text' name="summary" value={Input.summary} onChange={handleChange}/>
                    <p>{error.summary && error.summary}</p>
                </div>
                <div className="conteiner">
                    <label className="label" htmlFor="healthScore">Health Score:</label>
                    <input type='number' name="healthScore" value={Input.healthScore} onChange={handleChange}/>
                    <p>{error.healthScore && error.healthScore}</p>
                </div>
                <div className="conteiner">
                    <label className="label" htmlFor="image">Image:</label>
                    <input type='text' name="image" value={Input.image} onChange={handleChange}/>
                    <p>{error.image && error.image}</p>
                </div>
                <div className="conteiner">
                    <label className="label" htmlFor="steps">Steps:</label>
                    <input type='text' name="steps" value={Input.steps} onChange={handleChange}/>
                    <p>{error.steps && error.steps}</p>
                </div>
                <div className="conteiner">
                    <label className="label" htmlFor="diets">Diets:</label>
                    <input type='text' name="diets" value={Input.diets} onChange={handleChange}/>
                    <p>{error.diets && error.diets}</p>
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    )
 }