import React from 'react';
import { useCartProvider } from '../../context/CartContext';

export default function Card(props) {
  const value = useCartProvider();

  return (
    <div>
      <h2>{props.name}</h2>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          onChange={(event) => value.quantityHandler(event, props.index)}
          type="number"
          id="quantity"
          placeholder={props.quantity}
        />
        <p>{props.quantity * props.price} €</p>
      </div>
    </div>
  );
}

