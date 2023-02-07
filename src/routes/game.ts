import { Router, Response, Request } from 'express'
import gameController from '../controllers/game'

const router = Router()


router.get('/', gameController.getGames)
router.get('/:id', gameController.getGame)
router.post('/',  gameController.postGame)
router.put('/:id', gameController.putGame)
router.delete('/:id', gameController.deleteGame)

export default router