import React, { useState } from 'react';

function FormularioPostIt({ Agregar }) {
  const [titulo, setTitulo] = useState('');
  const [desc, setDesc] = useState('');
  // Acá dejo el "importante" como un booleano
  const [importante, setImportante] = useState(false);

  const envio = (e) => {
    // Aquí evitamos que el formulario se recargue al enviar para que no se borren los PostIt
    e.preventDefault();
    // Validamos que la descripción no esté vacía
    if (!desc.trim()) {
      alert("La descripción es obligatoria");
      return;
    }
    Agregar({ titulo, desc: desc, importante: importante });
    // las siguieintes 3 líneas limpian los campos del formulario después de enviar sin actualizar la página
    setTitulo('');
    setDesc('');
    setImportante(false);
  };

  return (
    <form className="nuevo-postit" onSubmit={envio}>
      <input type="text" placeholder="Título (opcional)" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <input type="text" placeholder="Descripción *" value={desc} onChange={(e) => setDesc(e.target.value)} required />
      <label>
        <input type="checkbox" checked={importante} onChange={(e) => setImportante(e.target.checked)} /> Importante!
      </label>
      <button className='subir' type="submit">AGREGAR</button>
    </form>
  );
}

export default FormularioPostIt;