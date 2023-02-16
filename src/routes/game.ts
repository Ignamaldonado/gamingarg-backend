import { Router, Response, Request } from 'express';
import gameController from '../controllers/game';
import multer from '../utils/multer.handler';

const router = Router()


router.get('/', gameController.getGames);
router.get('/:id', gameController.getGame);
router.post('/uploadimage', gameController.postImage);//,gameController.postGame)
router.put('/:id', gameController.putGame);
router.delete('/:id', gameController.deleteGame);

export default router;