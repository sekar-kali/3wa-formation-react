import React from 'react';
import { useCounter } from '../../context/CounterContext';

const ResetButton = () => {
  const { reset } = useCounter();
  return <button onClick={reset}className='bg-blue-300 px-6'>Reset</button>;
};

export default ResetButton;