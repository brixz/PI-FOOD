import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../Redux/actions.js";


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
            placeholder='Search by name...' 
            onChange={(e) => handleChange(e)}/>
            <button  type='submit' onClick={ (e) => handleButton(e)} >Search</button>
        </div>
    )
}