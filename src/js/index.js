
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";


import Home from "./component/home.jsx";
import PropTypes from "prop-types";


function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="reloj"><i className="far fa-clock"></i>{}</div>
            <div className="num1">{props.numero1}</div>
            <div className="num2">{props.numero2}</div>
            <div className="num3">{props.numero3}</div>
            <div className="num4">{props.numero4}</div>
            <div className="num5">{props.numero5}</div>
            <div className="num6">{props.numero6}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    numero1: PropTypes.number,
    numero2: PropTypes.number,
    numero3: PropTypes.number,
    numero4: PropTypes.number,
    numero5: PropTypes.number,
    numero6: PropTypes.number,
};

let counter = 0;
setInterval(function () {
    const num1 = Math.floor(counter / 100000) % 10;
    const num2 = Math.floor(counter / 10000) % 10;
    const num3 = Math.floor(counter / 1000) % 10;
    const num4 = Math.floor(counter / 100) % 10;
    const num5 = Math.floor(counter / 10) % 10;
    const num6 = Math.floor(counter / 1) % 10;
    counter++;


    ReactDOM.render(
        <SimpleCounter 
            numero6={num6} 
            numero5={num5} 
            numero4={num4} 
            numero3={num3} 
            numero2={num2} 
            numero1={num1} 
        />,
        document.querySelector("#app")
    );
}, 1000);