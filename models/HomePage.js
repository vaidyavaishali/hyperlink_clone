import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HeroSliderSchema = new Schema({
    logoimage:{type:String},
    heading:{type:String}
})
const heroSliderModel = mongoose.model("heroslider", HeroSliderSchema)
export default heroSliderModel