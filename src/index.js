//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const Root = document.getElementById("root");

ReactDOM.render(
  <div>
    <h1>Hello React</h1>
    <ul>
      <li>Bread</li>
      <li>Milk</li>
      <li>Eggs</li>
    </ul>
  </div>,
  Root
);
