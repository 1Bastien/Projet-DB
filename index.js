const express = require('express');
const mongoose = require("mongoose");

const models = require('./models');

mongoose.connect("mongodb://localhost/sportCenters", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.set("models", models);

const userRoute = require("./routes/user");

app.use(express.json());

userRoute(app);

app.listen(3000, ()=> {
    console.log("serveur ok")
});