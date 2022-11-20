import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './landingpage.css';

export default class Landingpage extends Component{
    render(){
        return (
            <>
                <h4>WelcomeTwo to my recipes!</h4>
                <Link to='/home'> 
                    <h2 align='center'>Start</h2>
                </Link>
            </>
        );
    }
};
