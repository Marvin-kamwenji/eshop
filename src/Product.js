import React from 'react'
import "./Product.css"

function Product({id, title, price, rating, image}) {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                  <small>KSHS </small>
                  <strong>{price}</strong>
                  </div>
                {/* <div className="product__rating">
                  {
                  Array(rating)
                  .fill()
                  .map(()=>(
                    <p>⭐</p>
                  ))
                  }</div> */}
            </div>
            <img src={image} alt ="nikesneaker"/>

            <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product