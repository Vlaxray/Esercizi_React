import React, { Component } from 'react';
import './Products.css';

export default class Product extends Component {
state = {
    cart:[],
    total:0
}
currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
   }
   getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.curr
   }
   
render() {
    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {this.state.cart.lenght} total items.
            </div>
            <div>Total {this.state.total}</div>
            <div className="product"></div>
            <button>Add</button> <button>Remove</button>
        </div>
    );
}
}