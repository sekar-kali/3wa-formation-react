import React, { useEffect, useState } from 'react';
import Accordion from './components/Accordion';
import AccordionProvider from './context/AccordionContext';
import Card from './components/Card/Card';
import TotalPrice from './components/Card/TotalPrice';
import CartProvider from './context/CartContext';
import DisplayCarts from './components/Card/DisplayCarts';
import CounterDisplay from './components/Counter/CounterDisplay';
import IncrementButton from './components/Counter/IncrementButton';
import DecrementButton from './components/Counter/DecrementButton';
import ResetButton from './components/Counter/ResetButton';
import { CounterProvider } from './context/CounterContext';
//rfc
export default function App() {
  /* 
IMPORTANT

On ne peut pas utiliser le context sur le composant qui l'utilise
*/

  return (
    // <AccordionProvider>
    //   <main className="container mx-auto">
    //     <h1>Accordion </h1>
    //     <Accordion />
    //     {/* ----------------- */}

    //     <CartProvider>
    //       <div>
    //         <h2>Cart Shop</h2>

    //         <DisplayCarts />
    //       </div>
    //     </CartProvider>
    //   </main>
    // </AccordionProvider>
<div>
<CounterProvider>
<div className='mt-10 ml-10'>
  <CounterDisplay />
  <IncrementButton />
  <DecrementButton />
  <ResetButton />
</div>
</CounterProvider>
</div>
  );
}
