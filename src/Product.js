import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, price, rating, image}) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                  <small>KSHS </small>
                  <strong>{price}</strong>
                  </div>
                <div className="product__rating">
                  {
                  Array(rating)
                  .fill()
                  .map((_, i)=>(
                    <p>⭐</p>
                  ))
                  }</div>
            </div>
            <img src={image} alt ="nikesneaker"/>

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    </div>
  )
}

export default Product