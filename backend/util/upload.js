import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.DB_URI;


const storage = new GridFsStorage({
    url : URL,
    options : { },
    file : (req, file)=>{
        const match = ["image/png" , "image/jpg"];

        if(match.indexOf(file.mimeType) === -1){
           return 'file_' + Date.now();
        }
        return {
            bucketName : "photos",
            filename: 'file_' + Date.now(),

        }

    }
})

export default multer({ storage });