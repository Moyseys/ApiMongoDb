import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Database from './database/Database'
import cachorroRouter from './routers/cachorroRouter'

Database.connect()
class App{
  public app
  constructor(){
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware(): void{
    this.app.use(express.json())
  }

  routes(): void{
    this.app.use('/cachorro', cachorroRouter)
  }
}

const instApp = new App()
const port = 3000
instApp.app.listen(port, () => console.log(`Server is running -> http://localhost:${port}`))