import React from 'react';
import { useCounter } from '../../context/CounterContext';

const IncrementButton = () => {
  const { increment } = useCounter();
  return <button onClick={increment} className='bg-green-300 px-6 mr-1'>+</button>;
};

export default IncrementButton;