import { compare, hash } from 'bcryptjs'
import userModel from '../models/user'

const encrypt = async (password: string) => {
    const hashedPassword = await hash(password, 8)
    return hashedPassword
}

const checkPassword = async (password:string ,hashedPassword: string) => {
    const checked = compare(password, hashedPassword)
    return checked
}

export {encrypt, checkPassword}