import React from 'react';
import Card from './components/Card';
import data from './assets/data';
export default function App() {
  return (
    <main className="p-10">
      <h1 className="text-2xl text-gray-100 text-center mb-10 uppercase font-mono">Characters ⚡️</h1>
      <div className="grid md:grid-cols-3 gap-5 ">
        {data.map((item) => (
          <Card key={item.name} image={item.image} name={item.name} description={item.description} />
        ))}
      </div>
    </main>
  );
}
