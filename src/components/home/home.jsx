import './home.css'
import React, {useState, useEffect} from 'react';
import Cart from '../cart';



export default function Home () {
  

const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      fetch('http://test1.com/main.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setProducts(data);
  });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

   return (
      <div className='Home'>
             <h2>Основне</h2>

<div class="product__wrapper">
      {products.map((product) => (
        <div class="product" key={product.id}>
          <div class="img__wrapper">
            <img src={`/images/img/${product.img_url}`}  alt=""/>
          </div>
          <h2>{product.name_product}</h2>
          <p>{product.descrip}</p>
          <p>{product.price} грн.</p>
          <button onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
    <Cart items={cartItems}/>
    {cartItems.length > 0 && (
      <div className='cart__actions'>
        <button onClick={clearCart}>Очистить корзину</button>
      </div>
    )}
      </div>
   )
}