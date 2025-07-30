const express = require('express');
const producto = require('../modules/productoModule');
const router = express.Router();

router.post('/api/crear-producto', producto.crearProducto);
router.get('/api/obtener-producto', producto.getProducto);
router.get('/api/productos', producto.obtenerProductos);
router.get('/api/stock-total', producto.obtenerStockTotal);

module.exports = router;
