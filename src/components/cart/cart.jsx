import React, { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  function addItem(item) {
    setItems([...items, item]);
    setTotal(total + item.price);
  }

  function removeItem(index) {
    const newItems = [...items];
    const removedItem = newItems.splice(index, 1);
    setItems(newItems);
    setTotal(total - removedItem[0].price);
  }

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} грн.
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {total} грн.</p>
    </div>
  );
}

export default Cart;