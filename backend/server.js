import express from 'express';
import cors from 'cors';
import userRouter from './routes/userroutes.js';
import {connectDB} from './config/db.js'
import foodRouter from './routes/foodRoute.js';
//app config
const app = express();
const port = 3000;
import 'dotenv/config';
import Cartrouter from './routes/cartRoutes.js';


//middleware
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type","Authorization","token"],
}));
app.use("/api/user",userRouter)

//api endpoints
app.use("/api/food",foodRouter);
app.use("/api/cart",Cartrouter)

app.use("/uploads", express.static("uploads"));
//db config
connectDB()
app.get('/', (req, res) => {
    res.send('API WORKING')
});



//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});