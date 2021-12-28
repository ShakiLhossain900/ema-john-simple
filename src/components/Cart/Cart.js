import React from 'react';
import product from './../product/product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

   let  total= 0;
   for (let i=0; i<cart.length; i++){
       const product = cart[i];
       total = total + product.price
   }
   let shipping =0;
   if (total >35){
       shipping =0;
   }
   else if(total>15){
      shipping = 4.99
   }
   else if (total > 0){
       shipping = 12.99
   }
   const tax = (total / 10).toFixed(2)
 
   const grandtotal = (total + shipping +Number(tax)).toFixed(2)
      
   const formentNumber = num =>{
       const precision = num.toFixed(2)
       return Number(precision)
   }

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Order :{cart.length}</p>
            <p> Product price : {formentNumber(total)}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total price : {grandtotal}</p>
        </div>
    );
};

export default Cart;