const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //Si no le paso nada pues se genera solo
      primaryKey: true,
      // autoIncrement: true,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true 
      //esto hace que la table se cree con el nombre que le dimos y no con un plural
  });

  sequelize.define('type', { name: DataTypes.STRING });

};
