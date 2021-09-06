

import React  from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";

ReactDom.render(
  <App 
  name={"Hari"}
  age={25}
  region={{state:"Tamilnadu"}}
  num={[1,2,4,5,6,8]}
  />
  ,document.getElementById("root"));