const express = require('express')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const port = 3001


app.get('/', (req, res) => {
    res.send('Servidor activo')
})


app.get('/info', (req, res) => {
    res.json({
        Mensaje: "Hola",
        Curso: "Hoa",
        Tecnologia: "Hola"
    })
})
