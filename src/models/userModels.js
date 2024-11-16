import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
        username : {
            type : String,
            required: [true,"Please provide a username"],
            unique:false,
        },
        email : {
            type : String,
            required: [true,"Please provide an email"],
            unique:true,
        },
        role :{
            type : String,
            required : [true,"Please provide a role"],
            unique : false,
        },
        password : {
            type:String,
            required : [true, "Please provide a password"],
        },
        gender : {
            type:String,
            required : [false, "Please provide a password"],
            default : null,
        },
        bloodgroup : {
            type:String,
            required : [false, "Please provide a password"],
            default : null,

        },
        address : {
            type:String,
            required : [false, "Please provide an address"],
            default : null,
        },
        latitude : {
            type:String,
            required : [false, "Please provide a latitude"],
            default : null,
        },
        longitude : {
            type:String,
            required : [false, "Please provide a longitude"],
            default : null,
        },
        profilepic : {
            type:String,
            required : [false, "Please provide a profile picture"],
            default : null,
        },

        isVerified: {
            type : Boolean,
            default : false,
        },
        isAdmin: {
            type : Boolean,
            default: false,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken:String,
        verifyTokenExpiry: Date,
        
    })

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;