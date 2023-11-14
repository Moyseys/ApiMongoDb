import mongoose, { Mongoose } from 'mongoose'

class Database{
  private readonly stringConnetion: string
  private connection!: Promise<Mongoose>
  constructor(){
    this.stringConnetion = process.env.MONGO_STRING_CONNECTION || ''
  }
  async connect(): Promise<Mongoose>{
    try{
      this.connection = mongoose.connect(this.stringConnetion)
      console.log('Conexão ao banco de dados estabelecida com sucesso!');
      return this.connection
      
    }catch(error: any){
      console.error('Não foi possível estabelecer a conexão com o banco de dados');
      throw new Error(error)
    }
  }

  async disconnect(): Promise<boolean>{
    try{
      (await this.connection).disconnect()
      console.log('Conexão ao banco de dados finalizada com sucesso!')
      return true
      
    }catch(error: any){
      console.error('Não foi possível finalizada a conexão com o banco de dados');
      throw new Error(error)
    }
  }
}

export default new Database()