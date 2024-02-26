import React from 'react';

import ProductPage from './ProductPage';

export default function CartPage({ cartItems, removeFromCart }) {
    const totalPrice = cartItems ? cartItems.reduce((acc, curr) => acc + curr.price, 0) : 0;


    return (
        <div className="cart-page">
            <h2>Cart</h2>
            <div className="cart-items">
                {cartItems && cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div>{item.title}</div>
                        <div>${item.price}</div>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="total-price">
                <strong>Total Price:</strong> ${totalPrice}
            </div>
        </div>
    );
}