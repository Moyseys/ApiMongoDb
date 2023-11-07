import cachorroModel from '../models/CachorroModel'
import CachorroInterface from '../interfaces/cachorros'
import { Request, Response } from 'express'

class CachorroController{
  async index(req: Request, res: Response){
    try {
      const cachorros = await cachorroModel.find()
      
      res.status(200).json(cachorros)
    } catch (error) {
      res.status(500).json({
        error: "Houve um erro ao acessar cachorros"
      })
    }
  }

  async store(req: Request, res: Response){
    const { nome, raça, idade, cor } = req.body as CachorroInterface
    if(!nome || !raça || !idade || !cor){
      res.status(400).json({
        error: 'Valores inválidos!s'
      })
    }
    try {
      const newCachorro = await cachorroModel.create(req.body)
      
      res.status(200).json({
        success: 'Cachorro cadastrado com sucesso!'
      })
    } catch (error) {
      res.status(500).json({
        error: "Ocorreu um erro no servidor!"
      })
    }
  }

  async update(req: Request, res: Response){
    const { id } = req.params
    const { nome, raça, idade, cor } = req.body as CachorroInterface

    if(!nome || !raça || !idade || !cor || !id){
      return res.status(400).json({
        error: 'Valores inválidos!s'
      })
    }

    try {
      const cachorro = await cachorroModel.findById(id)
      if(!cachorro){
        return res.status(400).json({
          error: `O cachorro com id '${id}' não existe!`
        })
      }

      await cachorroModel.findByIdAndUpdate(id, req.body)
      res.status(200).json({
        success: 'Cachorro modificado com sucesso!'
      })
      
    } catch (error) {
      res.status(400).json({
        error: "Ocorreu um erro no servidor!"
      })
    }
  }

  async delete(req: Request, res: Response){
    const { id } = req.params
    if(!id){
      return res.status(400).json({
        error: 'Valores inválidos!s'
      })
    }
    try {

      const cachorro = await cachorroModel.findById(id)
      if(!cachorro){
        return res.status(400).json({
          error: `O cachorro com id "${id}" não existe!`
        })
      }
      await cachorroModel.findByIdAndDelete(id)
      
      res.status(200).json({
        success: 'Cachorro deleteado com sucesso!'
      })
    } catch (error) {
      res.status(500).json({
        error: "Ocorreu um erro no servidor!"
      })
    }
  }
}

export default new CachorroController()