import { Order } from "../interfaces/order.interface";
import orderModel from "../models/order";


const getOrders = async () => {
    return await orderModel.find({});
}

const getOrder = async (id: string) => {
    return await orderModel.findOne({_id: id});
}

const postOrder = async (body: Order) => {
    return await orderModel.create(body);
}

const deleteOrder = async (id: string) => {
    return await orderModel.remove({_id: id});
}

export { getOrders, postOrder, deleteOrder, getOrder}