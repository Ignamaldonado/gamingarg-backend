import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handler";

const verifier = (req: Request, res: Response, next: NextFunction) => {
    let bearerHeader =  req.headers.authorization;
    if(typeof bearerHeader == 'undefined') return res.status(400).json({error: 'JWT_NOT_FOUND'})
    let bearerToken = bearerHeader.split(" ")[1];
    if (!bearerToken) res.status(400).json({error: 'JWT_NOT_FOUND'})
    const data = verifyToken(bearerToken, res)
    if(data) next() 
}

export {verifier}