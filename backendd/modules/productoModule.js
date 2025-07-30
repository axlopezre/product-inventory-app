const Producto = require('../models/Producto')
const sequelize = require('../sequelize');

const crearProducto = async (req, res) => {
  const { nombre, precio, stock } = req.body;
  try {
        const nuevoProducto = await Producto.create({
          nombre,
          precio,
          stock
        })
    
        res.status(201).json({ id: nuevoProducto.id, ...nuevoProducto.toJSON() })
  } catch (error) {
    res.status(500).json({ error: 'Fallo al crear producto' });
  }
};

const getProducto = async (req, res) => {
  const { nombre } = req.query
  try {
    const producto = await Producto.findOne({ where: { nombre } });

    if (!producto) {
      return res.status(404).json({
        success: false,
        errorCode: 'PRODUCTO_NO_ENCONTRADO',
        message: 'Producto no encontrado',
      })
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({
      success: false,
      errorCode: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Error',
    })
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

const obtenerStockTotal = async (req, res) => {
  try {
    const resultado = await Producto.findAll({
      attributes: [
        [
          sequelize.fn(
            'SUM',
            sequelize.literal('precio * stock')
          ),
          'totalValor'
        ]
      ],
    });

    const totalValor = resultado[0].get('totalValor') || 0;
    res.json({ totalValor });
  } catch (error) {
    console.error('Error al obtener stock total:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports ={ crearProducto, getProducto, obtenerProductos, obtenerStockTotal };
