import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Landingpage extends Component{
    render(){
        return (
            <>
                <h4>Bienvenidos a mi App.<hr/>Espero les guste!</h4>
                <Link to='/home'> 
                    <h2>Start</h2>
                </Link>
            </>
        );
    }
};
