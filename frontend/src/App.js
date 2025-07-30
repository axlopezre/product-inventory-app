import React, { useState, useEffect } from 'react';
import { crearProducto, obtenerProductos, obtenerStockTotal } from './services/api';
import BuscarProducto from './Components/BuscarProducto';
import './App.css';

export const App = () => {
  const [producto, setProducto] = useState({
    nombre: null,
    precio: null,
    stock: null
  });

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [totalStock, setTotalStock] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]:
        name === 'precio'
          ? parseFloat(value) || ''
          : name === 'stock'
          ? parseInt(value) || ''
          : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await crearProducto(producto);
      setProducto({ nombre: '', precio: 0.0, stock: 0 });
      cargarProductos();
    } catch (err) {
      setError('Error al crear producto. Intenta nuevamente.');
    }
  };

  const cargarProductos = async () => {
    try {
      const response = await obtenerProductos();
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const fetchStockTotal = async () => {
    try {
      const total = await obtenerStockTotal();
      setTotalStock(total);
    } catch (error) {
      console.error('Error obteniendo stock total:', error);
    }
  };

  useEffect(() => {
    cargarProductos();
    fetchStockTotal();
  }, []);

  return (
    <div className="contenedor">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2 className="formulario__titulo">Agregar Producto</h2>
        <label htmlFor="nombre" className="formulario__grupo">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
          />
        </label>

        <div className="formulario__grupo">
          <label htmlFor="precio" className="formulario__grupo">
            Precio:
            <input
              type="number"
              step="0.01"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="formulario__grupo">
          <label htmlFor="stock" className="formulario__grupo">
            Stock:
            <input
              type="number"
              name="stock"
              value={producto.stock}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="formulario__boton" type="submit" hidden={!producto.nombre|| !producto.precio || !producto.stock}>
          Guardar Producto
        </button>

        {error && <p className="error">{error}</p>}
      </form>

      <div className="lista-productos">
        <h2>Lista de Productos</h2>
        {productos.length === 0 ? (
          <p>No hay productos aún.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.nombre}</td>
                  <td>${prod.precio}</td>
                  <td>{prod.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      <div>
          <h3>Stock Total de Productos: {totalStock}</h3>
      </div>
      </div>
      <BuscarProducto />
    </div>
  );
};

export default App;
