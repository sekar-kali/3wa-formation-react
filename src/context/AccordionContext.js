import { createContext, useContext, useState } from 'react';
/* 1) Créer le context avec la fonction `createContext` */
const AccordionContext = createContext();

/* 2) Crée le composant `Provider` qui devra englober les composants 
qui devront avoir accés aux state du context
*/
export default function AccordionProvider(props) {
  /* Provider est un container qui permet aux elements qu'il engloble d'accéder 
    à ses données
    */

  const [indexSelected, setIndexSelected] = useState(null);
  // !false => true
  // !true => false
  const toggleHandler = (index) => {
    setIndexSelected(index === indexSelected ? null : index);
  };

  return (
    <AccordionContext.Provider
      value={{ indexSelected: indexSelected, toggleHandler: toggleHandler }}>
      {props.children}
    </AccordionContext.Provider>
  );
}

export function useAccordionProvider() {
  const value = useContext(AccordionContext);

  return value; // {name: 'John Doe'}
}
