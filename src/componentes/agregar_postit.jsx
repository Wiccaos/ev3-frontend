import React, { useState } from 'react';

function FormularioPostIt({ Agregar }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!descripcion.trim()) {
      alert("La descripción es obligatoria");
      return;
    }
    Agregar({ titulo, desc: descripcion, important: importante });
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };

  return (
    <form className="nueva-nota" onSubmit={manejarEnvio}>
      <input type="text" placeholder="Título (opcional)" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <input type="text" placeholder="Descripción *" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      <label>
        <input type="checkbox" checked={importante} onChange={(e) => setImportante(e.target.checked)} /> Importante
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioPostIt;