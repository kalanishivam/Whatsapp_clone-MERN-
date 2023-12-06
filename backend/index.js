import express from 'express'
import Connection from './database/db.js';
import router from './router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
//X7wiMVWrUjZ5MUAm
const PORT = 5000;

Connection();
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/' , router);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})