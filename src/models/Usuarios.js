//creacion de modelo
//todo va igual siempre menos los atributos y sus 
//respectivas caracteristicas
import { DataTypes } from "sequelize"
import { toDefaultValue } from "sequelize/lib/utils"
const usuariosAtributes = {
    id : {
        primaryKey : true,
        autoIncrement : true,
        type : DataTypes.INTEGER
    },
    nombre : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    apellido : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    usuario : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    password : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    email : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    fechaAlta : {
        type : DataTypes.DATE,
        toDefaultValue : DataTypes.NOW
    }
} 
const usuariosMethods = {
    timestamps : false
}
const UsuariosModel = {
    usuariosAtributes,
    usuariosMethods
}
export {UsuariosModel}