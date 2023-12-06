import express from 'express'
import { addUser, getUser } from '../controller/user-controller.js';
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { getMessage, newMessage } from '../controller/message-controller.js';
import { uploadFile } from '../controller/file-controller.js';
import  upload  from '../util/upload.js'


const router = express.Router();


router.post('/add' , addUser);
router.get('/users' , getUser);
router.post('/conversations/add' , newConversation);
router.post('/conversation/get', getConversation);
router.post('/messages/add', newMessage);
router.get('/messages/get/:id' , getMessage)
router.post('/upload/file',  upload.single("file") , uploadFile);
// router.get('/file/:fileName' , getFile);



export default router;