import React from 'react';
import {Link} from 'react-router-dom';

export default function ({title, diets,image, id}){
return(
    <div>
        <div>
             <img src={image} alt='img not fount' width='200px' height='200px' />
             <h1>Name:{title}</h1>
             <p>TypesDiets:{diets}</p>
        </div>
        <div>
            <Link to={'/recipes/' + id}>
              <p>More details...</p>
            </Link>
        </div>
    </div>
)
}