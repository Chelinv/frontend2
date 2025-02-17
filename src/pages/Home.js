import React, { useState } from "react";
import { createModelo } from "../api";

function Home() {
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const calcularCostos = async (event) => {
    event.preventDefault();

    const modelo = event.target.modelo.value;
    const talla = event.target.talla.value;
    const costoTela = parseFloat(event.target.costoTela.value);
    const cantidad = parseInt(event.target.cantidad.value);

    let costoManoObra = modelo === "A" ? 0.8 * costoTela : 0.95 * costoTela;
    let costoTotalPorUnidad = costoTela + costoManoObra;

    if (talla === "32" || talla === "36") {
      costoTotalPorUnidad += 0.04 * costoTotalPorUnidad;
    }

    const costoTotal = costoTotalPorUnidad * cantidad;
    const gananciaTotal = costoTotal * 0.3;
    const precioFinal = costoTotal + gananciaTotal;

    const datos = {
      tipo: modelo,
      talla: talla,
      costoTela: costoTela,
      costoManoObra: costoManoObra,
      ganancia: gananciaTotal,
    };

    try {
      await createModelo(datos);
      setMensaje("Datos guardados correctamente");
    } catch (error) {
      setMensaje("Error: No se pudo guardar en la base de datos");
      console.error(error);
    }

    setResultado({
      modelo,
      talla,
      costoTotal: costoTotal.toFixed(2),
      gananciaTotal: gananciaTotal.toFixed(2),
      precioFinal: precioFinal.toFixed(2),
    });
  };

  return (
    <div>
      <h1>Fábrica de Pantalones</h1>
      <form onSubmit={calcularCostos}>
        <label>Modelo:</label>
        <select name="modelo">
          <option value="A">Modelo A</option>
          <option value="B">Modelo B</option>
        </select>

        <label>Talla:</label>
        <select name="talla">
          <option value="30">Talla 30</option>
          <option value="32">Talla 32</option>
          <option value="36">Talla 36</option>
        </select>

        <label>Costo Tela:</label>
        <input type="number" name="costoTela" step="0.01" required />

        <label>Cantidad:</label>
        <input type="number" name="cantidad" required />

        <button type="submit">Calcular</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      {resultado && (
        <div>
          <p>Modelo: {resultado.modelo}</p>
          <p>Talla: {resultado.talla}</p>
          <p>Costo Total: ${resultado.costoTotal}</p>
          <p>Ganancia Total: ${resultado.gananciaTotal}</p>
          <p>Precio Final: ${resultado.precioFinal}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
