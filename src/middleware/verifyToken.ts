import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handler";

const verifier = (req: Request, res: Response, next: NextFunction) => {
    let bearerHeader =  req.headers.authorization;
    if(typeof bearerHeader == 'undefined') return res.status(400).json({ error: 'TOKEN_NOT_FOUND' });
    let bearerToken = bearerHeader.split(" ")[1];
    if (!bearerToken) res.status(400).json({ message: 'TOKEN_NOT_FOUND' });
    const data = verifyToken(bearerToken, res);
    if(data) next();
    res.status(403).json({ message: 'TOKEN_INVALID' }) 
}

export {verifier};