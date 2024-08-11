const mongoose = require("mongoose");

const otpSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique:true
  },
  otp:{
    type: String,
    required: true
  },
  used:{
    type: Boolean,
    default: false
  }
},{ timestamps: true });

otpSchema.index({createdAt: 1},{expireAfterSeconds: 300});

const otpModel = mongoose.model("otp",otpSchema);

module.exports = otpModel;