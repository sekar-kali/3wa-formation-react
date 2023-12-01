import React from 'react';
import { useCounter } from '../../context/CounterContext';

const DecrementButton = () => {
  const { decrement } = useCounter();
  return <button onClick={decrement} className='bg-red-300 px-6 mr-1'>-</button>;
};

export default DecrementButton;