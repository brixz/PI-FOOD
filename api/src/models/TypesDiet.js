const {DataTypes} = require('sequelize');

module.exports =(sequelize)=>{
    sequelize.define('TypesDiet',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING
        }
    });
};