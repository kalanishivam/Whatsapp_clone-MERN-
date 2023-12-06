import  express from 'express'
import User from '../models/User.js';

export const addUser = async (req, res)=>{
    // console.log(req.body);
    try{
         let exist = await User.findOne({sub : req.body.sub}); 
        if(exist){
            res.status(200).json({text : "user already exists"})    
            return;
        }

        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);
    }catch(error){
        console.log("error in adding " + error.message);
        res.status(5000).json(error.message);
    }
    
}

export const getUser = async (req, res)=>{
    try{
        const usersList = await User.find({});
        // console.log("here is the data from teh backend" + usersList);
        return res.status(200).json(usersList);
    }catch(error){
        console.log("ERROR IN GETTING USERS" , error.message);
        return res.status(500).json(error.message); 
    }
}