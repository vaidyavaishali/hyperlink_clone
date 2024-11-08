import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import heroSliderRoute from "./controllers/heroSliderRoute.js";
dotenv.config();
import cors from "cors"
const app = express();
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json());
mongoose.connect(process.env.MongoDb_URL).then((res) => {
    console.log("Connected to DB");
})

app.use("/", heroSliderRoute);


app.listen(port, () => {
    console.log(`server running at ${port}`)
})