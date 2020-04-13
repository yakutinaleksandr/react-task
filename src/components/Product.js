import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {editProductsAmountAction, removeProductAction} from "../actions";
import {faLink, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Product = ({product, dispatch}) => {

    const [state, setState] = useState(product);

    const handleAmountChange = amount => {
        setState({
            ...state,
            amount
        });
        dispatch(editProductsAmountAction({id: product.id, amount}));
    };

    const removeProduct = () => {
        dispatch(removeProductAction(product.id));
    };

    return <div className='product-list-item'>
        <div className='product-buttons-wrapper'>
            <button className='btn btn-sm btn-secondary' onClick={removeProduct}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
            <Link className='btn btn-sm btn-secondary' to={'/' + product.id}>
                <FontAwesomeIcon icon={faLink}/>
            </Link>
        </div>
        <div className='icon float-left'>
            <FontAwesomeIcon className='fa-5x' icon={product.icon}/>
        </div>
        <div className='product-list-description text-center'>

            <div>{product.name}</div>
            <div>
                <Button onClick={() => handleAmountChange(product.amount - 1)}
                        disabled={!(product.amount - 1)}>-</Button>
                <span>{product.amount}</span>
                <Button onClick={() => handleAmountChange(product.amount + 1)}>+</Button>
            </div>
            <div>
                <span>Total: {product.amount * product.price}$</span>
            </div>

        </div>
    </div>
};

export default connect()(Product);