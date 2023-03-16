const express = require('express')
const { router } = require('./routes/users.routes')
// const { router } = require('./routes/products.routes')

class Server {

  // constructor
  constructor() {
    this.app = express()

    this.routes()
  }

  // metodos
  routes() {

    this.app.use('/api', router)
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servidor arriba en el puerto 8080')
    })
  }
}

module.exports = {
  Server,
}