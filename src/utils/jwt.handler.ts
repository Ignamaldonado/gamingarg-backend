import { Response } from 'express';
import {  sign, verify } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

const jwt = process.env.SECRET;

const signToken =  ({ username, email, isAdmin}: User) => {
    return sign({username , email, isAdmin}, jwt!);
}

const verifyToken =  (token: string, res: Response) => {
    return verify(token, jwt!);
}

export {signToken, verifyToken};