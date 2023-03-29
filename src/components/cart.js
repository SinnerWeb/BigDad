import React from "react";

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name_product} - {item.price} грн.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
