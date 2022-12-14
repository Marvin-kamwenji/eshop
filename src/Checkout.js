import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue} from "./StateProvider";

function Checkout() {
  const [{basket}, dispatch] =useStateValue;
  return (
    <div className="checkout">
     <div className="checkout__left">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qeE6-STIkb_8QldpoAg3KhBQAmveMNH3-6twJQDPOt5A3hd6ROzo03xEND-zPnCA5Cc&usqp=CAU" alt="" className="checkout__ad" />
         <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {basket.map(item => (
              <CheckoutProduct
              id= {item.id} 
              title = {item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}

          </div>
     </div>
     <div className="checkout__right">
      <Subtotal />
     </div>
    </div>
  )
}

export default Checkout