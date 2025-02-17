import React, { useEffect, useState } from "react";

function Modelos() {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/modelos")
      .then((res) => res.json())
      .then((data) => setModelos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Modelos Guardados</h1>
      <ul>
        {modelos.map((modelo) => (
          <li key={modelo._id}>
            {modelo.tipo} - Talla {modelo.talla}: ${modelo.costoTela}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Modelos;
