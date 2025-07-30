// models/Estacionamiento.js

const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

module.exports = Producto