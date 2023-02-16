import { compare, hash } from 'bcryptjs';

const encrypt = async (password: string) => {
    return await hash(password, 8);
}

const checkPassword = async (password:string ,hashedPassword: string) => {
    return compare(password, hashedPassword);
}

export {encrypt, checkPassword};