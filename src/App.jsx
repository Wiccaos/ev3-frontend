import React, { useState } from 'react';
import PostIt from './componentes/postit';
import FormularioPostIt from './componentes/agregar_postit';

function App() {
  // ejemplos iniciales para que la página no esté vacía
  const [postits, setPostits] = useState([
    { titulo: "Ejemplo 1", desc: "Esta es una nota de ejemplo", importante: false },
    { titulo: "Prueba N3 Frontend", desc: "No olvidar enviar la prueba antes del domingo a las 23:59 y no dejarla en borrador!!", importante: true },
    { titulo: "Hola mundo", desc: "hola mundo", importante: false }
  ]);

  // acá usamos la funcion para agregar un post-it y en setPostits se especifica que se agregue el nuevo postit inicio
  const agregarPostit = (postit) => {
    setPostits([postit, ...postits]);
  };
  // función para eliminar un post-it según su posición
  // El filter crea un nuevo arreglo y saca el post-it a eliminar y el _ es para indicar que no se usará ese valor y la i la posicion
  // y por último el setPostits actualiza todo sin el post-it eliminado
  const eliminarPostit = (posicionPostit) => {
    const nuevoPostit = postits.filter((_, i) => i !== posicionPostit);
    setPostits(nuevoPostit);
  };

  return (
    <div className='app'>
      <div className="contenedor-app">
        <h1>Post It Simulator!</h1>
        <FormularioPostIt Agregar={agregarPostit} />
        <div className="contenedor-postits">
          {/* Aquí con map() se revisa cada post-it y lo muestra en pantalla */}
          {postits.map((postit, posicionPostit) => (
            <PostIt key={posicionPostit} posicionPostit={posicionPostit} postit={postit} eliminar={eliminarPostit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;