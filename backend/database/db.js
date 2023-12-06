import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const Connection = async ()=>{
    const URI = process.env.DB_URI
    try{
       await mongoose.connect(URI);
       console.log("CONNECTED");
    }catch(error){
        console.log("ERROR in connecitong:" + error.message)
    }
}


export default Connection;