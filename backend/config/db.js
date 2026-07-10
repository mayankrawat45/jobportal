import mongoose from "mongoose";

export const connectDB=async (req,res)=>{
    await mongoose.connect("mongodb+srv://rmayank6307178081_db_user:rmayank451@cluster0.yfaqixg.mongodb.net/Job")
    .then(()=>{
        console.log("Db Connected")
    })
}

