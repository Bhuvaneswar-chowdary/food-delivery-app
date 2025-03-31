import mongoose from "mongoose"
export const connectDB=async()=>{
    try{
        const connectDB= await mongoose.connect('mongodb+srv://bhuvaneswar:bhuvaneswar@bhuvaneswarcluster.yidef.mongodb.net/food_delivery').then(()=>{
            console.log("Database connected")
        })
    }
    catch(err){
        console.log(err)
    }
}

