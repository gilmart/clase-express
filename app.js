//const express = require('express') FORMA VIEJA DE IMPORTAR
import express from 'express'
//TRAIGO LIBRERIA QUE CONTROLA VARIABLES DE ENTORNO
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT)

//APP ES LA VARIABLE QUE ALMACENA TODA LA FUNCIONALIDAD DE EXPRESS
const app = express()

//ATENDIENDO PETICIONES Y RESPONDIENDO :

//1. PETICION DE TIPO GET PARA BUSCAR TODAS LAS HABITACIONES
app.get('/hotelesNick/habitaciones', function (req, res) {
  res.send('Estoy BUSCANDO todas las habitaciones')
})

//2. PETICION DE TIPO GET PARA BUSCAR HABITACION POR ID
app.get('/hotelesNick/habitacion/:id', function (req, res) {
    res.send('Estoy BUSCANDO habitacion por ID')
  })

//3. PETICION DE TIPO POST PARA AGREGAR HABITACION EN BD
app.post('/hotelesNick/habitacion', function (req, res) {
    res.send('Estoy AGREGANDO una habitacion')
  })

//4. PETICION DE TIPO PUT PARA EDITAR UNA HABITACION
app.put('/hotelesNick/modificarHabitacion', function (req, res) {
    res.send('Estoy ACTUALIZANDO una habitacion')
  })


//ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
app.listen(process.env.PORT, function(){
    console.log('SERVIDOR ENCENDIDO')
})