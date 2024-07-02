//conexion entre el servidor y la base de datos
//siempre igual
import { Sequelize } from "sequelize"
import { TareasModel } from "/Desktop/backend/src/models/Tareas.js"
import { UsuariosModel } from "/Desktop/backend/src/models/Usuarios.js"

const sequelize = new Sequelize({
    dialect : "sqlite",//motor de datos
    storage : "./db.sqlite"//donde esta el motor
})
//igual respetando los nombres de los atributos
//sequelize.define(nombre, atributos, metodos)
//vincula el modelo con la tabla de bases de datos
sequelize.define("Tareas", TareasModel.tareasAtributes, TareasModel.tareasMethods)
sequelize.define("Usuarios", UsuariosModel.usuariosAtributes, UsuariosModel.usuariosMethods)

//vinculo un atributo de tareas un atributo de usuarios para 
//recolectar algun dato(fk)
sequelize.models.Tareas.belongsTo(sequelize.models.Usuarios, {foreignKey: "UsuarioId"})
export default sequelize