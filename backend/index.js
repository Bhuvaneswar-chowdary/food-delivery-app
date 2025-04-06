import express from 'express';
import cors from 'cors';
import userRouter from './routes/userroutes.js';
import {connectDB} from './config/db.js'
import foodRouter from './routes/foodRoute.js';
import orderRouter from './routes/orderRoute.js';
import dotenv from "dotenv";
import Cartrouter from './routes/cartRoutes.js';

dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type","Authorization","token"],
}));

//api endpoints
app.use("/api/order",orderRouter)

app.use("/api/user",userRouter)

app.use("/uploads", express.static("uploads"));

//api endpoints
app.use("/api/food",foodRouter);
app.use("/api/cart",Cartrouter)

//db config
connectDB()
app.get('/', (req, res) => {
    res.send('API WORKING')
});



//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
