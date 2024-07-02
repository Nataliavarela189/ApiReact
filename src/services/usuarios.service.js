//importo la base de datos
import sequelize from "../databases/databases.js"

//asincronismo
//convierto una funcion en asincronica con async()
const getAll = async () => {
//con await le dice que le va a entregar a usuarios pero que espere 
//hasta que todo este cargado primero para seguir
//async() y  await van juntos, findall(encuentra todos)
    const allUsuarios = await sequelize.models.Usuarios.findAll()
//con map recorre la maqueta y con datavalues devuelve usuarios
    return allUsuarios.map(x => x.dataValues)
}


//borrar un atributo de usuarios de la base de datos
const getById = async (id) => {
    const usuario = await sequelize.models.Usuarios.findByPk(id)
    return usuario.dataValues
}

//crear casos de uso (alta-create, baja-delete, modif-update, consulta-read)

const createUser = async (body) => {
    const usuarioACrear = await sequelize.models.Usuarios.create({
        //id : body.id,
        nombre : body.nombre,
        apellido : body.apellido,
        password : body.password,
        email : body.email,
        fechaAlta : body.fechaAlta
    })  
    return usuarioACrear.dataValues
}

const deleteUser = async(idUsuario) => {
    const usuarioBorrar = await sequelize.models.Usuarios.destroy({
        where: {
             id : idUsuario
            }
    })
    return usuarioBorrar.dataValues
}

const readUser = () => {}

//busco un usuario
const updateUser = async (id, body) => {
    const userToUpdate = await sequelize.models.Usuarios.findByPk(id)
//si no existe tiro error
    if (!userToUpdate) {
        throw new Error("error, no existe el usuario")
    }
    userToUpdate.nombre = body.nombre,
    userToUpdate.apellido = body.apellido,
    userToUpdate.usuario = body.usuario,
    userToUpdate.password = body.password,
    userToUpdate.email = body.email

    await userToUpdate.save()
    return userToUpdate.dataValues
}

//meto todo aca
const usersServices = {
    getAll,
    getById,
    createUser,
    deleteUser,
    readUser,
    updateUser
}

export { usersServices }