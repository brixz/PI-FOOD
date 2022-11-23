import React from "react";
import { useDispatch } from "react-redux";
import { filteByDiets } from "../Redux/actions";

export default function Filtrado(){
    const dispatch = useDispatch();

    function handleFilterStatus(e){
 dispatch(filteByDiets(e.target.value))
    }
    return(
      //  <div className="conteiner">
                    <select onChange={e => handleFilterStatus(e)}>
                        <option value='All' name="diets">All</option>
                        <option value='dairy free' name="diets">dairy free</option>
                        <option value='gluten free' name="diets">gluten free</option>
                        <option value='primal' name="diets">primal</option>
                        <option value='vegan' name="diets">vegan</option>
                        <option value='lacto ovo vegetarian' name="diets">lacto ovo vegetarian</option>
                        <option value='whole 30' name="diets">whole 30</option>
                        <option value='pescatarian' name="diets">pescatarian</option>
                        <option value='fodmap friendly' name="diets">fodmap friendly</option>
                        <option value='ketogenic' name="diets" >ketogenic</option>
                        <option value='vegetarian' name="diets" >vegetarian</option>
                    </select>
      //  </div>
    )
}