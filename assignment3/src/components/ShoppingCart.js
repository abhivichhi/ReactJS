import React, {useState} from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
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

    const incrementCart = (productId) => {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === productId
                    ? {...item, quantity: item.quantity + 1}
                    : item
            ));
        }
    }
    const decrementCart = (productId) => {
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
    }
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
                    </div>
            </header>

            <main className="container mx-auto p-4">
                <div className="mt-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Collection</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="grid col-span-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
                        <div className="mt-8 col-start-3 col-end-3">
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
                                                    <p className="text-gray-500">Qty </p>
                                                    <div className="flex">
                                                        <button className="bg-gray-800 font-medium text-white px-3" type="button" onClick={() => incrementCart(item.id)}>+</button>
                                                        <span className="px-3">{item.quantity}</span>
                                                        <button className="bg-gray-800 font-medium text-white px-3" type="button" onClick={() => decrementCart(item.id)}>-</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                            <div className="mt-8 flex justify-between text-base font-medium text-gray-900">
                                <p>Total</p>
                                <p>${cartTotal}</p>
                            </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default ShoppingCart;
