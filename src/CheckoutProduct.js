import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,tittle,image,price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    console.log(id,tittle,image,price, rating);
    const removeFromBasket  = () =>{
      //add item to basket ....
      dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
        });
      
    };
    return (
        <div className="checkoutProduct">
           <img className="checkoutProduct__image" src={image} alt=""/>
           <div className="checkoutProduct__info">
               <p className="checkoutProduct__tittle">{tittle}</p>
               <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                            <StarIcon />
                            ))
                    }
             </div>
             <button onClick={removeFromBasket} >Remove from basket</button>
           </div>
          
        </div>
    )
}

export default CheckoutProduct
