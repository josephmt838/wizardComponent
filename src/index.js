import React from "react";
import ReactDOM from "react-dom";
import Wizard from "./components/Wizard";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Wizard />
  </Router>,
  document.getElementById("root")
);
