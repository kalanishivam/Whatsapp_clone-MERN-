import {Server} from 'socket.io'

const io = new Server(9000, {
    cors : {
        origin : "http://localhost:3000"
    }
})

let users = [];
const addUser = (userData, socketId) =>{
    !users.some(user => user.sub == userData.sub) && users.push({...userData , socketId})
}


io.on('connection' , (socket) =>{
    console.log("connected to the server in socket io");


    socket.on('/addUsers' , userData =>{
        addUser(userData , socket.id);
        io.emit("getUsers" , users);
    })
}); 
// io.listen(9000);
// var socket = io.connect('http://localhost:8080', {reconnect: true});
