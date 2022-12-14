const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    diets:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue:"https://th.bing.com/th/id/OIP.b7EmPUXO7gC2PmWZhY7CQAHaLF?pid=ImgDet&rs=1"
    },
    dishTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allownull: true
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });
};
