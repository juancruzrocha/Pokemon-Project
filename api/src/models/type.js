const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {


sequelize.define("Type", {
    name: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey : true,
    },
  },
  {
    timestamps: false,
  });
};