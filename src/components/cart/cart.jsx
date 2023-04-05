import './cart.css'
// import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import myArray from '../../myArray';



function Cart() {

  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!phone || !adress || !myArray.length) {
    //   alert('Пожалуйста, заполните все поля формы!');
    //   return;
    // }

    const items = myArray.map((item) => ({ name: item.name, price: item.price }));

    const data = { phone, adress, items };

    axios.post('/save-order.php', data)
      .then((response) => {
        console.log(response.data);
        // обработка успешного ответа
      })
      .catch((error) => {
        console.log(error);
        // обработка ошибки
      });
  };

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
        <form method="POST" action="/save-order.php" onSubmit={handleSubmit}>
          <label htmlFor='phone'>Номер телефону:</label>
          <input type='text' id='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />

          <label htmlFor='adress'>Адреса:</label>
          <input type='text' id='adress' value={adress} onChange={(event) => setAdress(event.target.value)} />

          <button type='submit'>Замовити</button>
        </form>
      <h3>Загальна ціна: {totalPrice} грн.</h3>
      </div>
      </div>

  );
}

export default Cart