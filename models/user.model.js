const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const addressSchema = mongoose.Schema({
    house: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
});

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true
    },
    addresses:{
        type:[addressSchema],
        default:[]
    }
});

const userModel = mongoose.model("user",userSchema);

module.exports= userModel;