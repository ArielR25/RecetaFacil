const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ingrediente', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    unidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidadEnvase: {
      type: DataTypes.STRING,
    },
    unidadEnvase: {
      type: DataTypes.STRING,
    },
    precioEnvase: {
      type: DataTypes.DECIMAL,
    }
  });
};