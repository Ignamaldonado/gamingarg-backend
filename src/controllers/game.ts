import {Request, Response} from 'express'
import { handleError } from '../utils/handle.errors'
import { getGames, insertGame, getGame, putGame, deleteGame } from '../services/game'

const controller = {

    getGame: (req: Request, res: Response) => {
        getGame(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'ERROR_GET_GAME', error))
            
    },

    getGames:  (req: Request, res: Response) => {
        getGames()
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'ERROR_GET_GAMES', error))
    },

    postGame: async (req: Request, res: Response) => {
        insertGame(req.body)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'ERROR_POST_GAME', error))
    },

    putGame: (req: Request, res: Response) => {
        putGame(req.params.id, req.body)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'ERROR_PUT_GAME', error))
    },

   deleteGame: (req: Request, res: Response) => {
        deleteGame(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'ERROR_DELETE_GAME', error))
   }

}





export default controller