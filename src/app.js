//Importamos la dependencia de express
const express = require('express')

//Declaramos la app express
const app = express()
app.use(express.json())




app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`)
})


console.log(`Trabajo Practico de Estrategias de Persistencia.....`)