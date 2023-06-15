import  Express  from "express";
import mongoose from "mongoose";
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helpers/jwt");
const error = require("./helpers/error.js");
const multer = require("multer");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
app.use(authJwt());
app.use(error);

//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const orderRoutes = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, orderRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(results => {
    //console.log(results)
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch(error => {
    console.log(error);
})

