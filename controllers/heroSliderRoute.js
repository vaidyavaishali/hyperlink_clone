import express from "express"
import cloudinary from '../cloudinary.js'
import uploader from "../multer.js"
import heroSliderModel from "../models/HomePage.js"
const heroSliderRoute = express.Router()

heroSliderRoute.post("/postherosliderdata", uploader.single("logoimage"), async (req, res) => {
    try {
        const upload = await cloudinary.v2.uploader.upload(req.file.path);
        const postData = await heroSliderModel.create({
            logoimage: upload.secure_url,
            heading: req.body.heading

        })
        res.status(201).json({
            status: "Success",
            postData
        })

    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

})

heroSliderRoute.get('/getherosliderdata', async (req, res) => {
    try {
        const getData = await heroSliderModel.find();
        res.status(200).json({
            status: "Success",
            getData
        })


    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})


heroSliderRoute.put("/updateherosliderdata/:id", uploader.single("logoimage"), async (req, res) => {
    try {
        const upload = await cloudinary.v2.uploader.upload(req.file.path);
        await heroSliderModel.updateOne({ _id: req.params.id }, req.body)
        res.status(201).json({
            status: "Success",
            // updateData
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

heroSliderRoute.delete("/deleteherosliderdata/:id", async (req, res) => {
    try {
        await heroSliderModel.deleteOne({ _id: req.params.id })
        res.status(201).json({
            status: "Success",
            // deletedData
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})




export default heroSliderRoute

