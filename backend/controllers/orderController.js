import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js";

// Placing user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5174";

    try {
        const { user, address, items, amount } = req.body;

        // Creating new order
        const newOrder = new orderModel({
            user,  // Using email as user identifier
            address,
            items,
            amount,
            status: "Pending",
            payment:false
        });

        await newOrder.save();
        await userModel.findOneAndUpdate({ email: user }, { cartData: {} });
        
        // Stripe payment setup

        // Adding delivery cost
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: { name: "Delivery Charges" },
                unit_amount: 20 * 100,
            },
            quantity: 1
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.error("Order placement error:", error);
        res.json({ success: false, message: "Error processing order" });
    }
};

export { placeOrder };
