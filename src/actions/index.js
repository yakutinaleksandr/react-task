let nextTodoId = 0;
export const addProductAction = product => ({
    type: 'ADD_PRODUCT',
    id: nextTodoId++,
    ...product
});

export const editProductsAmountAction = ({id, amount}) => ({
    type: 'EDIT_PRODUCTS_AMOUNT',
    id: id,
    amount: amount
});

export const removeProductAction = id => ({
    type: 'REMOVE_PRODUCT',
    id: id
});
