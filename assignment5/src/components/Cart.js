import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, addQuantity, subQuantity} from '../redux/actions';
import {Link} from "react-router-dom";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const handleremoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };
    const handleIncrementQtyCart = (productId) => {
        dispatch(addQuantity(productId));
    };
    const handleDecrementQtyCart = (productId) => {
        dispatch(subQuantity(productId));
    };
    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    ).toFixed(2);

    return (
        <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cart Details</h4>
            {cartItems.length === 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                    <p className="text-gray-500">Your cart is empty</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                    {cartItems.map((item) => (
                        <div key={item.id} className="py-6 flex cart-item">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty</p>
                                    <button className="bg-gray-800 font-medium text-white px-3" type="button"
                                            onClick={() => handleIncrementQtyCart(item.id)}>+
                                    </button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button className="bg-gray-800 font-medium text-white px-3" type="button"
                                            onClick={() => handleDecrementQtyCart(item.id)}>-
                                    </button>
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() => handleremoveFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>${cartTotal}</p>
                </div>
                {cartItems.length === 0 ? (
                    ''
                ) : (
                <div className="mt-6">
                    {window.location.pathname === '/payment' ? (
                        <Link to="/"
                              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Continue Shopping
                        </Link>
                    ) : (
                        <Link to="/payment"
                              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Proceed to Payment
                        </Link>
                    )}
                </div>
                    )}
            </div>
        </div>
    );
}

export default Cart;