import React, { Component } from "react";
import GroceryItems from "./GroceryItems";
import GroceryCart from "./GroceryCart";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(item) {
    const cart = [...this.state.cart, item];
    this.setState({ cart });
  }

  removeFromCart(index) {
    const cart = [...this.state.cart];
    cart.splice(index, 1);
    this.setState({ cart });
  }

  render() {
    return (
      <div id="app-container">
        <h1>My React App Template</h1>
        <p>Welcome to my React App Template </p>
        <div id="grocery-container">
          <GroceryItems addToCart={this.addToCart} />
          <GroceryCart
            items={this.state.cart}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }
}
