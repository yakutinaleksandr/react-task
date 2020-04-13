import {combineReducers} from "redux";

const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    amount: action.amount,
                    icon: action.icon
                }
            ];

        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.id);

        case 'EDIT_PRODUCTS_AMOUNT':
            return state.map(p => {
                if (p.id === action.id) {
                    return {
                        ...p,
                        amount: action.amount
                    }
                }
                return p;
            });

        default:
            return state
    }
};

export default combineReducers({products});