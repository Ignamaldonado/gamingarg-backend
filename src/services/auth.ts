import { Response } from "express";
import { User } from "../interfaces/user.interface";
import userModel from "../models/user";
import { checkPassword, encrypt } from "../utils/bcrypt.handler";
import { signToken } from "../utils/jwt.handler";

const registerUser = async (user: User, res: Response) => {
    const checkExist = await userModel.findOne({ email: user.email });
    if (checkExist) return 'USER_ALREADY_EXIST'
    const hashedPassword = await encrypt(user.password)
    const newUser = await userModel.create({
        username: user.username,
        password: hashedPassword,
        email: user.email,
        isAdmin: true
    })
    return newUser
}

const loginUser = async ({email, password}: User, res: Response) => {
    const findUser = await userModel.findOne({email})
    if(!findUser) return 'USER_NOT_FOUND'
    const hashedPassword = findUser.password
    const verified = await checkPassword(password, hashedPassword)
    if (!verified) return 'INVALID_PASSWORD'
    const token = signToken(findUser)
    const user = {
        id: findUser._id,
        username: findUser.username,
        email: findUser.email,
        isAdmin: findUser.isAdmin
    }
    return {token, user}
}

export { registerUser, loginUser }