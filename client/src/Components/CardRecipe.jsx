import React from 'react';
import {Link} from 'react-router-dom';
import './cardrecipe.css';

export default function CardRecipe({title, diets,image, id}){
return(
    <div className='conteiner'>
        <div className='todo'>
             <img src={image} alt='img not fount' width='200px' height='200px' />
             <h1>{title}</h1>
             <p>TypesDiets:{diets}</p>
        </div>
        <div className='mas'>
            <Link to={'/detail/'+id}>
              <p>More details...</p>
            </Link>
        </div>
    </div>
)
}