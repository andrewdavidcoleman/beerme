import React from "react";
import ReactDOM from "react-dom";
import BeerMe from "./beer";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './style.css';

ReactDOM.render(<BeerMe />, document.getElementById("root"));

module.hot.accept();
