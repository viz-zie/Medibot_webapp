import mongoose from "mongoose";
mongoose.connect ("mongodb://mongoadmin:1234@localhost:27017/?authSource=Healthmed")
.then(()=>{
    console.log("connection successful");
})
.catch(()=>{
    console.log("connection failed");
    
})



