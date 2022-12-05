const express = require('express');
const parser = require('body-parser');
const userRoute = require('./routes/userRoutes')

const app = express();
app.use("/", parser.urlencoded({extended: true}));
app.use("/",userRoute);


app.listen(80)

