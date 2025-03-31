import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

// Create an order
router.post("/place", async (req, res) => {
    try {
        console.log("Received Order Data:", req.body);

        const { user, address, items, amount } = req.body;

        if (!user || !address || !items || !amount) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const newOrder = new Order({
            user,
            address,
            items,
            amount,
            status: "Pending",
            createdAt: new Date()
        });

        await newOrder.save();
        console.log("Order saved successfully!");

        res.status(201).json({ success: true, message: "Order placed successfully", order: newOrder });

    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error });
    }
});

export default router;
