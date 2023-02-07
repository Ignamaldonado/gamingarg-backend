import { Response } from 'express'
import {  sign, verify } from 'jsonwebtoken'
import { User } from '../interfaces/user.interface'

const jwt = process.env.SECRET

const signToken =  ({ username, email, isAdmin}: User) => {
    const signedJWT = sign({username , email, isAdmin}, jwt!)
    return signedJWT
}

const verifyToken =  (token: string, res: Response) => {
    const verified = verify(token, jwt!)
    return verified
}

export {signToken, verifyToken} 