//Usando onjeto express
const express = require('express')
//app de Express
const app = express()
app.use(express.json())//Indicamos que urasemos JSON
//Puerto en que vamos a ver nuestra app: localHost:3000
const port = 3000

//HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Berna1"}
    const explorer2 = {id: 2, name: "Berna2"}
    const explorer3 = {id: 3, name: "Berna3"}
    const explorer4 = {id: 4, name: "Berna4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listenig on port ${port}`)
})