const router = require("express").Router();
const uuid = require("uuid");
const UserModel = require("../models/users.model");

router.get("/", async (req, res)=>{
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req,res)=>{
    try {
        console.log(req.body);
        const user_id = uuid.v4();
        const userData = {
            user_id: user_id,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };
        const userModel = new UserModel(userData);
        const addUser = await userModel.save();
        res.status(200).json(addUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;