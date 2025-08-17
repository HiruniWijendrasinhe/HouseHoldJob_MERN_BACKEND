import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Address: {
    type: String,
    required: true,
    trim: true
  },
  PhoneNo: {
    type: String,
    required: true,
    match: [
      /^[0-9]{10}$/,
      "Please fill a valid phone number"
    ]
  },
  Age: {
    type: Number,
    required: true,
    min: 1
  },


}, { timestamps: true });

export default mongoose.model("Add", userSchema, "Adminadds");
