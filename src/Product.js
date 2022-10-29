import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <div className="product__price">$30</div>
                <div className="product__rating">⭐⭐⭐⭐</div>
            </div>
            <img src="https://www.treehugger.com/thmb/SShPLoEHvhEViNtPvs82-QcCPrQ=/2121x1193/smart/filters:no_upscale()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg" alt ="horseImage"/>

            <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product