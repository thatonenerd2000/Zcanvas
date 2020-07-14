import React from 'react';

export const CartContext = React.createContext(0)

const GlobalContextWrapper = (props) => {
    const [cartItem,incCartItem] = React.useState(0);
    return(
        <CartContext.Provider value={[cartItem,incCartItem]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default GlobalContextWrapper