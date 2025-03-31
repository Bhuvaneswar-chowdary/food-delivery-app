import express from 'express'
import { addtoCart,removefromcart,getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';
const Cartrouter= express.Router();

Cartrouter.post("/add",authMiddleware,addtoCart)
Cartrouter.post("/remove",authMiddleware,removefromcart)
Cartrouter.post("/get",authMiddleware,getCart)

export default Cartrouter
