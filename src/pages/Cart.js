import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, inc, dec } from '../store/cartSlice';

const Cart = () => {
    // const [counters, setCounters] = useState(1);
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    console.log(products)

    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    function increment(productId) {
        dispatch(inc(productId))
        console.log(productId)
    }

    function decrement(productId) {
        dispatch(dec(productId))

    }


    return (
        <div>
            <h3>Cart</h3>
            <div className='cartWrapper'>
                {products.map(product => (
                    <div className='cartCard'>
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price * product.qty}</h5>
                        <div>
                            <button onClick={() => decrement(product.id)}>-</button>
                            {product.qty}
                            <button onClick={() => increment(product.id)}>+</button>
                        </div>
                        <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
