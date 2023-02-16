import {Request, Response} from 'express';
import userModel from '../models/user';
import {User} from '../interfaces/user.interface';
import { registerUser, loginUser } from '../services/auth';
import { handleError } from '../utils/handle.errors';

const controller = {

    register: (req: Request, res: Response) => {
        registerUser(req.body)
            .then(result => {
                if(result === 'USER_ALREADY_EXIST') return res.status(409).json({error: result})
                res.status(200).json(result)})
            .catch(error => handleError(res, 'REGISTER_ERROR', error));
    },

    login: async (req: Request, res: Response) => {
        loginUser(req.body)
            .then(result => {
                if(result === 'USER_NOT_FOUND' || result === 'INVALID_PASSWORD') return res.status(400).json({error: result})
                res.status(200).json({token: result.token, user: result.user})})
            .catch(error => handleError(res, 'LOGIN_ERROR', error));
    }
}

export default controller