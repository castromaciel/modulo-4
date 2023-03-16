const express = require('express')

const app = express() 

app.get('/api/', (req, res) => {
  res.json({
    message: 'Obtuviste un uno'
  })
})

app.get('/api/pedido', (req, res) => {
  res.json({
    message: 'Obtuviste un uno'
  })
})

app.post('/api/pedido', (req, res) => {
  res.status(201).json({
    message: 'Pedido creado'
  })
})

app.post('/api', (req, res) => {
  res.status(201).json({
    message: 'Saludo creado'
  })
})

app.put('/api', (req, res) => {
  res.json('PUT request')
})

app.patch('/api', (req, res) => {
  res.json('PATCH request')
})

app.delete('/api', (req, res) => {
  res.json({
    message: 'DELETE request'
  })
})

app.listen(8080, () =>{
  console.log(`El servidor esta corriendo en el puerto ${8080}`)
})
