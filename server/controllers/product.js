import express from "express";
const router = express.Router();
import mongoose from "mongoose";

//import models

//function

router.get('/sayHello', async(req,res) => {
    return res.status(200).json({
        message: 'HEllo from server side'
    })
})

export default router;