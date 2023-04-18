import '../style/main.css'
import myArray from '../../myArray';
import React, {useState, useEffect} from 'react';

export function pusharr(product) {
  myArray.push({
    name: product.name_product,
    price: product.price
  });

  console.log(myArray);
}

export default function Dessert () {

const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('http://test1.com/dessert.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setProducts(data);
  });
  }, []);

   return (
      <div className='content'>
        <h2>Десерти</h2>
      <div className="product__wrapper">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="img__wrapper">
              <img src={`/images/img/${product.img_url}`}  alt=""/>
            </div>
          <h2>{product.name_product}</h2>
          <p>{product.descrip}</p>
          <p>{product.price} грн.</p>
            <button className='push__btn' onClick={() => pusharr(product)}>
              Додати у кошик
            </button>
        </div>
      ))}
    </div>
      </div>
   )
}

