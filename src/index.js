import React from "react";
import ReactDOM from "react-dom";
import BeerMe from "./beer";
import './style.css';

ReactDOM.render(<BeerMe />, document.getElementById("root"));

module.hot.accept();
