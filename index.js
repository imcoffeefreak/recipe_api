const express = require('express');
const cors = require('cors');
require('./config');
const app = express();

app.use(cors());
app.use(express.json());

const userRoute = require("./controllers/users.controller");
const authRoute = require("./controllers/auth.controller");


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(8000, ()=>{
    console.log("app is running at post 8000");
})