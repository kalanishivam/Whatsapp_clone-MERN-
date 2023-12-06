import conversation from "../models/Conversations.js";
import Message from "../models/Message.js"

export const newMessage = async (req, res)=>{
    try{
        const newMes = new Message(req.body);


        await newMes.save();

        await conversation.findByIdAndUpdate(req.body.conversationId, {message : req.body.text});

        return res.status(200).json("message has been saved to the database");
    }catch(error){
        console.log("error in message controller" , error.message);
        return res.status(500).json(error.message);
    }
}


export const getMessage = async (req, res)=>{
    try{
            const messages = await Message.find({conversationId : req.params.id});
            return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json(error.message);
    }
}