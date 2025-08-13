import React, {useState} from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const productData = [
        {
            id: 1,
            name: 'Classic White Sneakers',
            price: 1809.99,
            description: 'Timeless white sneakers with cushioned soles for all-day comfort',
            image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8485d89-a932-4c35-85e9-7fda565a2ac0.png',
            alt: 'Clean white canvas sneakers with rubber soles laid on a wooden surface in sunlight'
        },
        {
            id: 2,
            name: 'Black Leather Boots',
            price: 1499.99,
            description: 'Premium leather boots with waterproof exterior',
            image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/13284064/2022/11/12/1651f155-d2d0-43bb-af72-754b9f38ddfc1668256722003-Delize-Women-Black-Flat-Boots-7891668256721487-1.jpg',
            alt: 'Stylish black leather boots with silver buckles standing on concrete floor'
        },
        {
            id: 3,
            name: 'Running Shoes',
            price: 1190.99,
            description: 'Lightweight running shoes with air-cushioned technology',
            image: 'https://www.asics.co.in/media/catalog/product/1/0/1011b891_401_sr_rt_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=375&width=500&auto=webp&format=pjpg',
            alt: 'Modern running shoes with neon accents and breathable mesh upper'
        }
    ];
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            ));
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = (productId) => {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem.quantity > 1) {
            setCart(cart.map(item =>
                item.id === productId
                    ? {...item, quantity: item.quantity - 1}
                    : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== productId));
        }
    };

    const cartTotal = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    ).toFixed(2);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-gray-900 text-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Online Shoe Store Application</h1>
                    <button
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <span className="mr-2">Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="container mx-auto p-4">
                {/* Shopping Cart Sidebar */}
                {isCartOpen && (
                    <div className="fixed inset-0 z-50 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                onClick={() => setIsCartOpen(false)}
                            ></div>
                            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                                <div className="w-screen max-w-md">
                                    <div className="h-full flex flex-col bg-white shadow-xl">
                                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                                                <button
                                                    type="button"
                                                    className="text-gray-400 hover:text-gray-500"
                                                    onClick={() => setIsCartOpen(false)}
                                                >
                                                    <span className="sr-only">Close</span>
                                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mt-8">
                                                {cart.length === 0 ? (
                                                    <p className="text-gray-500">Your cart is empty</p>
                                                ) : (
                                                    <div className="flow-root">
                                                        <ul className="-my-6 divide-y divide-gray-200">
                                                            {cart.map((item) => (
                                                                <li key={item.id} className="py-6 flex cart-item">
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
                                                                            <p className="text-gray-500">Qty {item.quantity}</p>
                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    onClick={() => removeFromCart(item.id)}
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>${cartTotal}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                                <p>
                                                    or{' '}
                                                    <button
                                                        type="button"
                                                        className="text-indigo-600 font-medium hover:text-indigo-500"
                                                        onClick={() => setIsCartOpen(false)}
                                                    >
                                                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Product Grid */}
                <div className="mt-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Collection</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {productData.map((product) => (
                            <div key={product.id} className="product-card group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                                <div className="w-full h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.alt}
                                        className="w-full h-full object-cover object-center group-hover:opacity-75"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/600x400';
                                            e.target.alt = 'Placeholder for shoe image';
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
export default ShoppingCart;
