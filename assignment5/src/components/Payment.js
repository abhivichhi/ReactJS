import React, {useState} from 'react';
import Cart from "./Cart";
import {useSelector} from "react-redux";

const Payment = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (paymentMethod === 'creditCard') {
            // Handle credit card payment logic here
            console.log('Processing credit card payment:', {cardNumber, expiryDate, cvv});
        } else {
            // Handle COD logic here
            console.log('Processing cash on delivery payment');
        }
    };

    return (
        <div className="min-h-screen">
            <main className="mx-auto p-4">
                {/* Product Grid */}
                <div className="mt-8 mb-16">
                    <Cart/>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <div
                            className="col-start-2 col-end-2 product-card group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                            <div className="w-full p-4 h-75 overflow-visible">
                                <h2 className="text-center">Select Payment Method</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="text-center">
                                        <label className="px-2">
                                            <input
                                                className="mx-1"
                                                type="radio"
                                                value="creditCard"
                                                checked={paymentMethod === 'creditCard'}
                                                onChange={handlePaymentMethodChange}
                                            />
                                            Credit Card
                                        </label>
                                        <label className="px-2">
                                            <input
                                                className="mx-1"
                                                type="radio"
                                                value="cod"
                                                checked={paymentMethod === 'cod'}
                                                onChange={handlePaymentMethodChange}
                                            />
                                            Cash on Delivery
                                        </label>
                                    </div>

                                    {paymentMethod === 'creditCard' && (
                                        <div>
                                            <div className="block w-full">
                                                <label className="block w-full">
                                                    Card Number:
                                                    <input
                                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                                                        type="text"
                                                        value={cardNumber}
                                                        onChange={(e) => setCardNumber(e.target.value)}
                                                        required
                                                    />
                                                </label>
                                            </div>
                                            <div className="d-inline-block w-50">
                                                <label  className="block w-full">
                                                    Expiry Date:
                                                    <input
                                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                                                        type="text"
                                                        value={expiryDate}
                                                        onChange={(e) => setExpiryDate(e.target.value)}
                                                        placeholder="MM/YY"
                                                        required
                                                    />
                                                </label>
                                            </div>
                                            <div className="d-inline-block w-50">
                                                <label className="block w-full">
                                                    CVV:
                                                    <input
                                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                                                        type="text"
                                                        value={cvv}
                                                        onChange={(e) => setCvv(e.target.value)}
                                                        required
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    <div className="mt-6 text-right">
                                    <button
                                        className="rounded-md bg-sky-500 px-5 py-2.5 text-sm leading-5 font-semibold text-white hover:bg-sky-700"
                                        type="submit">Pay Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Payment;
