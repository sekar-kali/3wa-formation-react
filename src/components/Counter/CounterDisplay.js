import React from 'react';
import { useCounter } from '../../context/CounterContext';

const CounterDisplay = () => {
  const { count } = useCounter();
  return <div className='text-5xl pb-2'>Count: {count}</div>;
};

export default CounterDisplay;