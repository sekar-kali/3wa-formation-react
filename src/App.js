import { useState } from 'react';
import Start from './components/Start';
import End from './components/End';

// Définition du composant principal App
export default function App() {
  // État pour stocker la note sélectionnée
  const [ratingSelected, setRatingSelected] = useState(null);
  // État pour contrôler si la soumission a eu lieu
  const [submitted, setSubmitted] = useState(false);

  // Fonction pour sélectionner une note
  const selectRating = (rating) => setRatingSelected(rating);

  // Fonction appelée lors de la soumission
  const onSubmit = () => ratingSelected && setSubmitted(true);

  return (
    // Conteneur principal de l'application
    <main className="bg-black min-h-screen overflow-hidden flex justify-center items-center">
      {/* Conteneur interne pour la section de notation */}
      <div className="bg-gray-800 w-96 max-w-xl max-h-xl h-96 rounded-3xl shadow-l p-8 ">
        {/* Affiche le composant End si soumis, sinon affiche le composant Start */}
        {submitted ? (
          <End />
        ) : (
          <Start selectRating={selectRating} ratingSelected={ratingSelected} onSubmit={onSubmit} />
        )}
      </div>
    </main>
  );
}
