import mongoose from 'mongoose'

const cachorroSchema = new mongoose.Schema({
  nome: String,
  raça: String,
  idade: Date,
  cor: String,
})

const cachorroModel = mongoose.model('Cachorros', cachorroSchema)

export default cachorroModel