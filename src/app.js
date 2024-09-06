//traigo lo que necesito
import express from "express"
import cors from "cors"
import { usuariosRouter } from "./routers/usuarios.routes.js"

//inicializo la estructura express(siempre va igual)
const app = express()
app.use(express.json())

//da la autorizacion para que el back sea solicitado por el front autorizado
//y no lo bloquee
const corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions))

//definir entrada a enpoints de usuarios

app.use("/usuarios", usuariosRouter.router)


export default app