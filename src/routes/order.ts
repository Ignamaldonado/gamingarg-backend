import { Router } from "express";
import orderController from '../controllers/order'

const router = Router()

router.get('/', orderController.getOrders)
router.get('/:id', orderController.getOrder)
router.post('/:id', orderController.postOrder)
router.delete('/:id', orderController.deleteOrder)

export default router