import cachorroController from '../controllers/CachorroController'
import express from 'express'

const cachorroRouter = express.Router()
cachorroRouter.get('/', cachorroController.index)
cachorroRouter.post('/', cachorroController.store)
cachorroRouter.put('/:id', cachorroController.update)
cachorroRouter.delete('/:id', cachorroController.delete)

export default cachorroRouter 