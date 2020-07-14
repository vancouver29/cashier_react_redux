import React, { Component } from "react";
import GroceryItems from "./GroceryItems";
import GroceryCart from "./GroceryCart";
import History from "./History";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>Grocery Cart</h1>
        <History />
        <div id="grocery-container">
          <GroceryItems />
          <GroceryCart />
        </div>
      </div>
    );
  }
}
