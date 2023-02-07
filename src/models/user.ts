import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>({
    username:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    isAdmin:{type:Boolean, required: true}
},{
    timestamps: true,
    versionKey: false
})

const userModel = model('users', UserSchema)
export default userModel