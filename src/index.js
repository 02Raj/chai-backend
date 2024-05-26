//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config();

connectDB()
.then(() => {
    app.lisen(process.env.PORT || 8080, () => {
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection !!!",err)
})
/*
import express from "express";
const app = express()
( async () => {
    try{
        await mongoose.connect(`${process.env.MOMGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listing in port ${process.env.PORT}`);
        })
    }catch (error){
console.error("ERROR: ", error)
    }
}) ()*/