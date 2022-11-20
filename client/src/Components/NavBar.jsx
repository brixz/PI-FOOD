import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar(){
return (
    <div className="divNav">
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/createRecipe'>Create Recipe</Link></li>
        </ul>
    </div>
    )
}