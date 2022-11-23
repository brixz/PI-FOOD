import React from "react";
import s from './paginado.module.css';

export  default function Paginado({recipeForPage, recipes, paginado}){
    const pageNum=[];

    for (let i = 0; i <= Math.ceil(recipes / recipeForPage); i++) {
        pageNum.push(i);        
    }
    return(
        <nav className={s.paginado}>
            <ul className={s.paginado}>
                { 
                pageNum && pageNum.map(num =>{
                 return(  <li className={s.paginado}>
                        <a onClick={()=>paginado(num)} className='paginado'>{num}</a>
                   </li>)
                })}
            </ul>
        </nav>
    );
};