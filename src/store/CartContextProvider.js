import CartContext from "./cart-context";

const addItemHandler = (item) => {};

const removeItemHandler = (id) => {};

const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
}

const CartContextProvider = (props) => {
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;