import React from 'react';

function PostIt({ postit, eliminar, posicionPostit }) {
  const { titulo, desc, importante } = postit;

  return (
    // Esta clase "postit" se usa para aplicar estilos a cada post-it. La clase "importante" se aplica si la nota es importante para despues editar en css y ponerle color rojo
    <div className={`postit ${importante ? 'importante' : ''}`}>
      {/* el && funciona como un if, si titulo existe, se muestra el texto h2 */}
      {titulo && <h2>{titulo}</h2>}
      <p className='desc'>{desc}</p>
      <button className="cerrar" onClick={() => eliminar(posicionPostit)}>X</button>
    </div>
  );
}

export default PostIt;