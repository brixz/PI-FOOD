const {DataTypes} = require('sequelize');

module.exports =(sequelize)=>{
    sequelize.define('TypesDiets',{
        Id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
		timestamps: false
	});
};