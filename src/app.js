//Importamos la dependencia de express
const express = require('express')

//Declaramos la app express
const app = express()
app.use(express.json())

const db = require('./db/models')

//importamos las rutas
const profesorRouter = require('./routes/profesor.route')
const alumnoRouter = require('./routes/carrera.route')
const materiaRouter = require('./routes/materia.route')
const cursoRouter = require('./routes/curso.route')

//Usamos las rutas 
app.use(profesorRouter)
app.use(alumnoRouter)
app.use( materiaRouter)
app.use(cursoRouter)

//importamos dotenv
const dotenv = require('dotenv')

//declaramos las variables de entorno
dotenv.config({path:'../variables.env'})
console.log(process.env.PORT)

//declaramos la variable de entorno
const port = process.env.PORT || 3000

app.listen(port,async () => {
    
    try {
        //Esto verifica si me pude conectar bien a la base de datos
         await db.sequelize.authenticate()
    
        // El método sync solo se usa en ambientes de desarrollo. No utilizar en produccion
        // porque borra todas las tablas y las vueve a crear
         await db.sequelize.sync({force:true});
    }catch(error){
        console.log(error)
    }
})


console.log(`Trabajo Practico de Estrategias de Persistencia.....`)