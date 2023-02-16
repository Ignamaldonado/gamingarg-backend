import {Request, Response} from 'express'
import { handleError } from '../utils/handle.errors'
import { getGames, insertGame, getGame, putGame, deleteGame, insertImage } from '../services/game'
import { Game } from '../interfaces/game.interface'

const controller = {

    getGame: (req: Request, res: Response) => {
        getGame(req.params.id)
            .then(result => {
                if (result === 'GAME_NOT_FOUND') return res.status(404).json({ message: result })
                res.status(200).json(result)
            })
            .catch(error => handleError(res, 'ERROR_GET_GAME', error));
            
    },

    postGame: (req : Request, res : Response) => {
        const { name, year, description, image, type, price, machine } = req.body
        const game : Game = {
            name,
            image,
            description,
            year,
            type,
            price,
            machine
        }
        insertGame(game)
            .then(result => {
                res.status(200).json(result)
            })
    },

    getGames:  (req: Request, res: Response) => {
        getGames()
            .then(result => {
                if (result === 'NO_GAMES_FOUND') return res.status(404).json({message: result})
                res.status(200).json(result)
            })
            .catch(error => handleError(res, 'ERROR_GET_GAMES', error))
    },

    postImage: async (req: Request, res: Response) => {
        await insertImage(req.files as any)
            .then(result => {
                if (result === 'INVALID_FILE') return res.status(400).json({ message: result })
                res.status(200).json({ result })
            })
            .catch(error => handleError(res, 'ERROR_POST_GAME', error));
    },

    putGame: (req: Request, res: Response) => {
        putGame(req.params.id, req.body)
            .then(result => {
                if (result === 'GAME_NOT_FOUND') return res.status(404).json({ message: result })
                res.status(200).json(result)})
            .catch(error => handleError(res, 'ERROR_PUT_GAME', error));
    },

   deleteGame: (req: Request, res: Response) => {
        deleteGame(req.params.id)
            .then(result => {
                if (result === 'GAME_NOT_FOUND') return res.status(404).json({ message: result })
                res.status(200).json(result)})
            .catch(error => handleError(res, 'ERROR_DELETE_GAME', error));
   }

}





export default controller;