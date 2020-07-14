import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../reducers/actions";

class GroceryItems extends Component {
  render() {
    return (
      <div id="grocery-items">
        <table border="1">
          <tbody>
            <tr>
              <th></th>
              <th>Item Price</th>
              <th>Item Name</th>
            </tr>
            {this.props.items.map((item, index) => {
              return (
                <tr id={index}>
                  <td>
                    <button onClick={() => this.props.addToCart(item)}>
                      Add
                    </button>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.forSale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch(
        //   {type: "ADD_TO_CART",
        // item,}
        addToCart(item)
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems);
