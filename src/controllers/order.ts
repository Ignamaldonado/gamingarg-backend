import { Request, Response } from "express";
import { getOrder, getOrders, postOrder, deleteOrder } from "../services/order";
import { handleError } from "../utils/handle.errors";

const controller = {

    getOrder: (req: Request, res: Response) => {
        getOrder(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'GET_ORDER_ERROR', error));
    },

    getOrders: (req: Request, res: Response) => {
        getOrders()
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'GET_ORDERS_ERROR', error));
    },

    postOrder: (req: Request, res: Response) => {
        postOrder(req.body)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'POST_ORDER_ERROR', error));
    },

    deleteOrder: (req: Request, res: Response) => {
        deleteOrder(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => handleError(res, 'DELETE_ORDER_ERROR', error));
    }

}

export default controller