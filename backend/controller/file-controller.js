



export const uploadFile = async (req, res)=>{
    const URL = 'http://localhost:5000';
    if(!req.file){
        return res.status(404).json("no file selected")
    }

    const fileUrl = `${URL}/file/${req.file.fileName}`;
    return res.status(200).json(fileUrl);
}

export const getFile = async (req , res) =>{

}