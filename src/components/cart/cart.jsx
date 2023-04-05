import './cart.css'
import React from 'react';
import myArray from '../../myArray';



function Cart() {

  const totalPrice = myArray.reduce((acc, curr) => acc + Number(curr.price), 0);
  return (
    <div className='Cart_wrapper'>
      <h2>Ваше замовлення</h2>
      <div className='cart__wrapper-block'>
        <div className='cart__block'>
      {myArray.map(item => (
        <div className='block' key={item.id}>
          <div>{item.name}</div>
          <div>Ціна: {item.price} грн.</div>
        </div>
      ))}</div>
      <h3>Загальна ціна: {totalPrice} грн.</h3>
      </div>
      </div>

  );
}

export default Cart