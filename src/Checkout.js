import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no item in your basket . To buy one ore more items , clcik "Add to basket" next to the item </p>
                </div>

            ) : (
                    <div>
                        <h2 className="checkout__tittle">Your Shopping Basket</h2>
                        {/* List out all of the checkout products */}
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                tittle={item.tittle}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
            )}
             {basket.length > 0 && (
                <div className="checkout__right">
                <Subtotal/>
                </div>
            )}

        </div>
    );
}

export default Checkout
