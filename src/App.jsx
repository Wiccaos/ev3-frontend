import React, { useState } from 'react';
import PostIt from './componentes/postit';
import FormularioPostIt from './componentes/agregar_postit';

function App() {
  // Notas de ejemplo iniciales para que la página no esté vacía al inicio
  const [notas, setNotas] = useState([
    { titulo: "Ejemplo 1", desc: "Esta es una nota de ejemplo", important: false },
    { titulo: "Prueba 10/07", desc: "No olvidar enviar la prueba", important: true }
  ]);

  const agregarNota = (nota) => {
    setNotas([nota, ...notas]);
  };

  const eliminarNota = (indice) => {
    const nuevasNotas = notas.filter((_, i) => i !== indice);
    setNotas(nuevasNotas);
  };

  return (
    <div className="contenedor-app">
      <h1>Post It Simulator!</h1>
      <FormularioPostIt Agregar={agregarNota} />
      <div className="contenedor-notas">
        {notas.map((nota, posicionNota) => (
          <PostIt key={posicionNota} posicionNota={posicionNota} nota={nota} alEliminar={eliminarNota} />
        ))}
      </div>
    </div>
  );
}

export default App;