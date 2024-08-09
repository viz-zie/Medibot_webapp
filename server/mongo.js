import mongoose from "mongoose";
mongoose.connect ("mongodb://localhost:27017/Healthmed")
.then(()=>{
    console.log("connection successful");
})
.catch(()=>{
    console.log("connection failed");
})



