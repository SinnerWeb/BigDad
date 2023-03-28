import './pizza.css'

import React, {useState, useEffect} from 'react';

export default function Pizza () {

const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('http://test1.com/pizza.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setProducts(data);
  });
  }, []);

   return (
      <div className='Pizza'>
             <h2>Піца</h2>

<div class="product__wrapper">
      {products.map((product) => (
        <div class="product" key={product.id}>
          <div class="img__wrapper">
            <img src={`/images/img/${product.img_url}`}  alt=""/>
          </div>
          <h2>{product.name_product}</h2>
          <p>{product.descrip}</p>
          <p>{product.price} грн.</p>
        </div>
      ))}
    </div>
      </div>
   )
}