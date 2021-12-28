import React, {useEffect, useState} from 'react';
import jasonfile from "../../fakeData/products.json"
import './Shop.css'
import Product from '../product/product'
import product from './../product/product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const load =[...jasonfile]

    const first10 = load.slice(0,10)
    const [product, setproduct] = useState(first10)

    const [cart, setcart] = useState([]);

    const handleAddProduct = (product)=>{
        const newCart =[...cart , product]
        setcart(newCart)
    }

    return (
        <div className='shop-container'>
           <div className="product-container">
                {
                    product.map(pd=><Product
                    handleAddProduct ={handleAddProduct}
                         product={pd}></Product>)
                }
           </div>
           <div className="cart-container">
              <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;