import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from './SearchBar';
import {addToCart} from '../redux/actions';
import Cart from "./Cart";

function ShoppingCart() {
    const cartItems = useSelector((state) => state.cart.items);
    const quantity = React.useState(0);
    const shoesProduct = [
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
    const [productData, setproductData] = useState(shoesProduct);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product, quantity));
    };
    const dispatch = useDispatch();
    const handleSearch = (query) => {
        // Simulate a search operation
        if(query){
            const results = productData.filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()));
            setproductData(results);
        } else {
            setproductData(shoesProduct);
        }
    };
    return (
        <div className="min-h-screen">
            <main className="mx-auto p-4">
                {/* Product Grid */}
                <div className="mt-8 mb-16">
                    <Cart />
                    <SearchBar onSearch={handleSearch} />
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
                                            onClick={() => handleAddToCart(product)}
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
