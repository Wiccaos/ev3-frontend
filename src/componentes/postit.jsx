import React from 'react';

// Cambié "indice" por "posicionNota" para mayor claridad
function PostIt({ nota, alEliminar, posicionNota }) {
  const { titulo, desc, important } = nota;

  return (
    // Esta clase "nota" se usa para aplicar estilos a cada post-it. La clase "important" se aplica si la nota es importante para editar en css
    <div className={`nota ${important ? 'important' : ''}`}>
      <button className="cerrar" onClick={() => alEliminar(posicionNota)}>X</button>
      {titulo && <h2>{titulo}</h2>}
      <p>{desc}</p>
    </div>
  );
}

export default PostIt;