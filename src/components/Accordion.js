import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import data from '../assets/data';
import { useAccordionProvider } from '../context/AccordionContext';

export default function Accordion() {
  const value = useAccordionProvider();

  return (
    <div className="bg-indigo-500 p-8 flex flex-col gap-5 justify-center items-center">
      {/* Accordion Item */}
      {data.map((item, index) => (
        <div key={index} className="bg-white p-4 w-[30rem]">
          {/* Header accordion */}
          <div
            onClick={() => value.toggleHandler(index)}
            className="cursor-pointer flex items-center gap-4">
            {value.indexSelected === index ? <FaMinus /> : <FaPlus />}
            <h2>{item.question} </h2>
          </div>
          {/* Réponse de la question */}
          {/* Si l'index de item sélectionner est égale a l'index de l'élément afficher la div */}
          <div
            className={`${
              value.indexSelected === index ? undefined : 'hidden'
            }  mt-8`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
