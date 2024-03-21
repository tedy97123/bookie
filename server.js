import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';

//Routes
import kickStarterRoutes from './Routes/Kickstarter.js'

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/upcoming',kickStarterRoutes);

// Mongoose setup
const Port = 8000;

const MONGO_URL = 'mongodb+srv://tedyyohanes97:Peeman200@cluster1.vs1vunz.mongodb.net/Books';

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
})
.then(() => console.log('connected to DB'))
.catch((error) => console.log(`${error} Sorry could not connect to db`));

app.listen(Port, '0.0.0.0', () => console.log(`Server running on ${Port}`));

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});