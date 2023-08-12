const router = require('express').Router();
const UserModel = require("../models/users.model");

router.post("/login", async (req,res) => {
    try {
        const {email, password} = req.body;
        const response = await UserModel.findOne({email: email, password: password});
        if(response){
            res.status(200).send(response);
        }
        res.status(401).send({"error": "Invalid username or password"});
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;