import React from "react";
import {connect} from "react-redux";
import Product from "./Product";

const ProductList = ({products}) => {

    const getTotalPrice = () => {
        return products.reduce((accumulator, product) => accumulator + product.price * product.amount, 0);
    };

    return <div className='split right text-center'>
        <h4>Product list</h4>
        {products.map(p => <Product key={p.id} product={p}/>)}
        <span>Total: {getTotalPrice()}$</span>
    </div>
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);