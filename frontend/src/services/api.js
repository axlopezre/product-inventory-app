import axios from "axios";

const BASE_URL = "http://localhost:3002/api";

const crearProducto = async (Data) => {
  try {
    const response = await axios.post(`${BASE_URL}/crear-producto`, Data);
    return response;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

const obtenerProductos = async (Data) => {
  try {
    const response = await axios.get(`${BASE_URL}/productos`, Data);
    return response;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

const obtenerProductoPorNombre = async (nombre) => {
  const response = await axios.get(`${BASE_URL}/obtener-producto`, {
    params: { nombre }
  });
  return response.data;
};

const obtenerStockTotal = async () => {
  const response = await axios.get(`${BASE_URL}/stock-total`);
  return response.data.totalValor;
};

export {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorNombre,
  obtenerStockTotal
};
