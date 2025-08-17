import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
Email:{
type:String,
required:true,
unique:true,
lowercase:true,
match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            "Please fill a valid email address"
          ]
},
Password:{
type:String,
required:true,
minlength: 6,
},
},{timestamps:true});
export default mongoose.model("UserData",userSchema,"UserLogin");