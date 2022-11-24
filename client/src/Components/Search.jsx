import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../Redux/actions"; 


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    };
    function handleButton(e){
        e.preventDefault();
        dispatch(getRecipeByName(name))      
    };

    return (
        <div>
            <input  type="text" 
            placeholder='Search by name or diet type:' 
            onChange={(e) => handleChange(e)}></input>
            <button type='submit' onClick={ (e) => handleButton(e)} >Search</button>
        </div>
    )
}