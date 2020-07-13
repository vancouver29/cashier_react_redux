import React, { Component } from "react";
import GroceryItems from "./GroceryItems";
import GroceryCart from "./GroceryCart";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>My React App Template</h1>
        <p>Welcome to my React App Template </p>
        <div id="grocery-container">
          <GroceryItems />
          <GroceryCart />
        </div>
      </div>
    );
  }
}
