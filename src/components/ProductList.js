import React, {useState} from "react";
import {connect} from "react-redux";
import Product from "./Product";

const ProductList = ({products}) => {

    const getTotalPrice = () => {
        let totalPrice = 0;
        products.forEach(p => {
            totalPrice+= p.price*p.amount;
        });
        return totalPrice;
    };

    return <div className='split right text-center'>
        <h4>Product list</h4>
        {products.map(p => <Product key={p.id} product={p}/>)}
        <span>Total:</span>
        {getTotalPrice()}
        <span>$</span>
    </div>
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);