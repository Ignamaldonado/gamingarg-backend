import { model, Schema} from 'mongoose'
import { Order } from '../interfaces/order.interface'

const orderSchema = new Schema<Order>({

    email: {type:String, required:true},
    gameId: {type:String, required:true},
    price: {type:Number, required:true}
},{
    timestamps: true,
    versionKey:false
})

const orderModel = model('orders', orderSchema)
export default orderModel