import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: String, required: true },
    address: { type: Object, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
