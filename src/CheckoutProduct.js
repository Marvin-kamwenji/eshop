import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
        <img src="https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?k=20&m=623270836&s=612x612&w=0&h=C0WdoMeoHYugJy8mVgrTl8p1U8DltiZ25AzzjGY05GA=" alt="" className="checkoutProduct__image" /> 

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
            Green Sneakers
            </p>
            <p className="checkoutProduct__price">
               <small>KSHS </small>
                <strong>3000</strong>
            </p>
            <div className="checkoutProduct__rating">
             ⭐⭐⭐⭐
            </div>
            <button>Remove from Basket</button>
        </div>   
    </div>  
)
}

export default CheckoutProduct