import React, { useState } from 'react';
import PostIt from './componentes/postit';
import FormularioPostIt from './componentes/agregar_postit';

function App() {
  // ejemplos iniciales para que la página no esté vacía
  const [postits, setPostits] = useState([
    { titulo: "Ejemplo 1", desc: "Esta es una nota de ejemplo", importante: false },
    { titulo: "Prueba 10/07", desc: "No olvidar enviar la prueba", importante: true }
  ]);

  const agregarPostit = (postit) => {
    setPostits([postit, ...postits]);
  };

  const eliminarPostit = (indice) => {
    const nuevoPostit = postits.filter((_, i) => i !== indice);
    setPostits(nuevoPostit);
  };

  return (
    <div className="contenedor-app">
      <h1>Post It Simulator!</h1>
      <FormularioPostIt Agregar={agregarPostit} />
      <div className="contenedor-postits">
        {postits.map((postit, posicionPostit) => (
          <PostIt key={posicionPostit} posicionPostit={posicionPostit} postit={postit} alEliminar={eliminarPostit} />
        ))}
      </div>
    </div>
  );
}

export default App;