//importo lo que necesito
import express from "express"
//vinculamos la api con los servicios
import { usersServices } from "../services/usuarios.service.js" 

//aca se construye la ruta ENPOINTS
const router = express.Router()
//muestre de manera asincronica usuarios
router.get("/obtenerTodos", async (req, res) => {
//con try intenta hacer esto
    try {
//con await dice que espere hasta cargar todos los datos
        const usuario = await usersServices.getAll()
//muestre los usuarios en forma de json "la":"le"
        res.json(usuario)
//si no pudiste con try entonces guarda el error numero 500
//con un mensaje que diga oops, algo malio sal
    } catch (error) {
        res.status(500).json({ error: "oops, algo malio sal"})
    }
})

router.get("/obtenerById/:id", async (req, res) => {
    //con try intenta hacer esto
        try {
    //con await dice que espere hasta cargar todos los datos
            const usuario = await usersServices.getById(req.params.id)
    //muestre los usuarios en forma de json "la":"le"
            res.json(usuario)
    //si no pudiste con try entonces guarda el error numero 500
    //con un mensaje que diga oops, algo malio sal
        } catch (error) {
            res.status(500).json({ error: "oops, algo malio sal"})
        }
    })

//ruta de crear usuario
router.post("/crearUsuario", async (req, res) => {
    try {
        const usuario = await usersServices.createUser(req.body)
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ error: "oops, algo malio sal"})
    }
})

router.delete("/usuarioABorrar", async (req, res) => {
    const { id } = req.query
    try {
        await usersServices.deleteUser(id) 
        res.status(200).json({ exito : "se borro el usario" })
    } catch (error) {
        res.status(500).json({ error: "oops, algo malio sal"}) 
    }
})

router.put("/:id", async (req, res) => {
    try {
        const response = await usersServices.updateUser(req.params.id, req.body)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
const usuariosRouter = {
    router
}
//exporto la ruta
export { usuariosRouter }