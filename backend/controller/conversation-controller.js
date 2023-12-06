import conversation from "../models/Conversations.js";

export const newConversation = async (req, res)=>{
    try{
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;
        const exist = await conversation.findOne({ members: { $all : [recieverId, senderId]}});

        if(exist){
            return res.status(200).json("conversation already present");
        }

        const newConv = new conversation({
            members : [senderId, recieverId]
        });
        await newConv.save();
        return res.status(200).json('added in the schema')
    }catch(error){
        return res.status(500).json(error.message);
    }

}


export const getConversation = async (req, res) =>{
    try{    
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;
        let textss = await conversation.findOne({ members: { $all : [recieverId, senderId]}});
        return res.status(200).json(textss);


    }catch(error){
        console.log("error in calling getConversation controller method in the backend", error.message)
        return res.status(500);
    }
}