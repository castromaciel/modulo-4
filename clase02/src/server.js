import express from 'express'
// import productsRoutes from '../src/routes/products.routes.js'
import userRoutes from '../src/routes/users.routes.js'
// import { productsRoutes, userRoutes } from '../src/routes/index.js'

export class Server {

  // propiedades
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  // metodos

  middlewares() {
    this.app.use(express.json())
    // CORS 
  }

  routes() {
    this.app.use('/api/users', userRoutes)
    // this.app.use('/api/products', productsRoutes)
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    })
  }
}
