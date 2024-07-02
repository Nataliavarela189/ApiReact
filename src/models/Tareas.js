//creacion de modelo
//todo va igual siempre menos los atributos y sus 
//respectivas caracteristicas
import { DataTypes } from "sequelize"
import { toDefaultValue } from "sequelize/lib/utils"
const tareasAtributes = {
    id : {
        primaryKey : true,
        autoIncrement : true,
        type : DataTypes.INTEGER
    },
    descripcion : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    UsuarioId : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
}
const tareasMethods = {
    timestamps : false
}
const TareasModel = {
    tareasAtributes,
    tareasMethods
}
export {TareasModel}