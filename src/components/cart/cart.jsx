import '../style/cart.css'
import React from 'react';
import '../style/media.css'
import myArray from '../../myArray';

function handleOrder() {
  const phone = document.getElementById("phone").value;
  const data = { items: myArray.map(item => ({ name: item.name, price: item.price })), phone: phone };

  fetch('http://test1.com/orders.php', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    myArray.splice(0, myArray.length);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function handleDelete() {
  myArray.splice(0, myArray.length);
}

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
      <form>
        <input type="tel" name="phone" id="phone" placeholder='Контактний телефон' />
        <button onClick={handleOrder}>Замовити</button>
        <button onClick={handleDelete}>Видалити</button>
      </form>
      
      <h3>Загальна ціна: {totalPrice} грн.</h3>
      </div>
      </div>

  );
}

export default Cart