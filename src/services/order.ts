import { Order } from "../interfaces/order.interface";
import orderModel from "../models/order";


const getOrders = async () => {
    const orders = await orderModel.find({})
    return orders
}

const getOrder = async (id: string) => {
    const order = await orderModel.findOne({_id: id})
    return order
}

const postOrder = async (body: Order) => {
    const order = await orderModel.create(body)
    return order
}

const deleteOrder = async (id: string) => {
    const order = await orderModel.remove({_id: id})
    return order
}

export { getOrders, postOrder, deleteOrder, getOrder}