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

  private middleware(): void{
    this.app.use(express.json())
  }

  private routes(): void{
    this.app.use('/cachorro', cachorroRouter)
  }

  async startServer(): Promise<number>{
    const port = Number(process.env.PORT) || 3000
    this.app.listen(port, () => console.log(`Server is running -> http://localhost:${port}`))
    return port
  }

  getServer(){
    return this.app
  }
}

const instApp = new App()
instApp.startServer()


export default App