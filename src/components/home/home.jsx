import './home.css'
import React, {useState, useEffect} from 'react';



export default function Home () {

const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('http://test1.com/main.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setProducts(data);
  });
  }, []);

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
        </div>
      ))}
    </div>
      </div>
   )
}