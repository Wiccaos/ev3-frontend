import React from 'react';

function PostIt({ postit, alEliminar, posicionPostit }) {
  const { titulo, desc, importante } = postit;

  return (
    // Esta clase "postit" se usa para aplicar estilos a cada post-it. La clase "importante" se aplica si la nota es importante para editar en css
    <div className={`postit ${importante ? 'importante' : ''}`}>
      <button className="cerrar" onClick={() => alEliminar(posicionPostit)}>X</button>
      {titulo && <h2>{titulo}</h2>}
      <p>{desc}</p>
    </div>
  );
}

export default PostIt;