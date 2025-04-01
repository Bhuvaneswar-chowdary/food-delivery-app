import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food item

const addFood = async (req, res) => {
    try {
        const newFoodItme = new foodModel({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image,
            price: req.body.price,
        });
        const result = await newFoodItme.save();
        console.log("result = ", result);
        res.json({ success: true, message: "Food Added" })
    } catch (err) {
        // console.log(err)
        res.json({ success: false, message: err })
    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

//remove food
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "food item removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}
export { addFood, listFood, removeFood }