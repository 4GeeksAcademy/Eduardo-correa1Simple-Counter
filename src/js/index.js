//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { func } from "prop-types";

function SimpleCounter(){
    return(<div className="bigCounter">
        <div className="reloj"><i className="far fa-clock"></i>{}</div>
        <div className="num1">0</div>
        <div className="num2">0</div>
        <div className="num3">0</div>
        <div className="num4">0</div>
        <div className="num5">0</div>
        <div className="num6">0</div>
    </div>)
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
