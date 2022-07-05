//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

import Counter from "./component/Counter.jsx";

//render your react application
ReactDOM.render(<Counter />, document.querySelector("#app"));