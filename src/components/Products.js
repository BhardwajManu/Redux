import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, inc, dec } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts()
    }, []);

    const handleAdd = (product) => {
        dispatch(add({ ...product, qty: 1 }));
    }

    function increment(productId) {
        dispatch(inc(productId))
    }

    function decrement(productId) {
        dispatch(dec(productId))
    }

    return (
        <div className='productWrapper'>
            {
                products.map(product => {
                    const cartItem = cart.find(item => item.id === product.id);
                    return (
                        <div className='card' key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {!cartItem ? (
                                    <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
                                ) : (
                                    <div>
                                        <button onClick={() => decrement(product.id)}>-</button>
                                        {cartItem.qty}
                                        <button onClick={() => increment(product.id)}>+</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Products
