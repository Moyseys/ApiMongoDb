import mongoose, { Mongoose } from 'mongoose'

class Database{
  private readonly stringConnetion: string
  constructor(){
    this.stringConnetion = process.env.MONGO_STRING_CONNECTION || ''
  }
  async connect(): Promise<Mongoose>{
    try{
      const connect = mongoose.connect(this.stringConnetion)
      console.log('Conexão ao banco de dados estabelecida com sucesso!');
      return connect
      
    }catch(error: any){
      console.error('Não foi possível estabelecer a conexão com o banco de dados');
      throw new Error(error)
    }
  }
}

export default new Database()