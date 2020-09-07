import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, tittle, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket=() =>{
      //add item to basket ....
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            tittle:tittle,
            image:image,
            price:price,
            rating:rating
        }
      })
      
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{tittle}</p>
                <p className="product__">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                            <StarIcon />
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
