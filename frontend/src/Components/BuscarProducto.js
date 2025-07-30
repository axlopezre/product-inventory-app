import React, { useState } from 'react';
import { obtenerProductoPorNombre } from '../services/api';

const BuscarProducto = () => {
  const [nombreBusqueda, setNombreBusqueda] = useState('');
  const [productoBuscado, setProductoBuscado] = useState(null);
  const [errorBusqueda, setErrorBusqueda] = useState('');

  const buscarProducto = async () => {
    try {
      const response = await obtenerProductoPorNombre(nombreBusqueda);
      setProductoBuscado({ precio: response.precio, stock: response.stock});
      setErrorBusqueda('');
    } catch (err) {
      setProductoBuscado(null);
      setErrorBusqueda('Producto no encontrado');
    }
  };

  return (
    <div className="busqueda-producto">
      <h2>Buscar Producto por Nombre</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombreBusqueda}
        onChange={(e) => setNombreBusqueda(e.target.value)}
      />
      <button onClick={buscarProducto} hidden={!nombreBusqueda}>Buscar</button>

      {errorBusqueda && <p style={{ color: 'red' }}>{errorBusqueda}</p>}

      {productoBuscado && (
        <div className="producto-encontrado">
          <p><strong>Precio:</strong> ${productoBuscado.precio}</p>
          <p><strong>Stock:</strong> {productoBuscado.stock}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarProducto;
