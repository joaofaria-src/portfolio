import React, { forwardRef } from "react";
import { FaTimes } from "react-icons/fa";
import "./shoppingCart.css";

const ShoppingCart = forwardRef(({ isOpen, toggleCart, cartItems, removeFromCart }, ref) => {
    return (
        <div ref={ref} className={`shopping-cart ${isOpen ? 'open' : ''}`}>
            <div className="shopping-cart-header">
                <h4>Cart</h4>
                <button className="close-cart" onClick={toggleCart}><FaTimes /></button>
            </div>
            <div className="shopping-cart-body">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={`http://localhost:1337${item.attributes.Image.data[0].attributes.url}`} alt={item.attributes.Title} />
                            <div className="cart-item-details">
                                <h5>{item.attributes.Title}</h5>
                                <p>${item.attributes.Price}</p>
                            </div>
                            <button className="remove-item" onClick={() => removeFromCart(index)}><FaTimes /></button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            <div className="shopping-cart-footer">
                <button className="btn-viewcart">View Cart</button>
                <button className="btn-checkout">Checkout</button>
            </div>
        </div>
    );
});

export default ShoppingCart;
