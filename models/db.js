const {Sequelize, DataTypes} = require('sequelize');


// const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('apiWithReact', 'root','308568', {
    host:'localhost',
    dialect: 'mysql'
})
//testing connection    
const user = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        
        allowNull : false

    },
    phone:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING(50),
        

    },
    dob: {
        type: DataTypes.DATE,
        

    },
    address: {
        type: DataTypes.STRING(100),
        

    },
    website: {
        type: DataTypes.STRING(100),
        

    },
   

})
module.exports =user

user.sync({alter: true});