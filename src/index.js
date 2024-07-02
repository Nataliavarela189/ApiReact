//traigo el archivo que contiene la api (app)
import app from "./app.js"
//se levanta el proyecto en el puerto tal...
const PORT = 4001 
//
app.get("/",(req,res) => {
    const htmlResponse = '<html><head><title>Backend</title></head><body>API LEVANTADA</body></html>'
    res.send(htmlResponse)
})
app.listen(PORT, () => {
    console.log(`servidor iniciado en: http://localhost:${PORT}`)
})