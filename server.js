import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';

//Routes
import kickStarterRoutes from './Routes/Kickstarter.js'
import bookRoutes from './Routes/GoodReads.js'
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/upcoming',kickStarterRoutes);
app.use('/books',bookRoutes);
app.use('/dropDatabase', async function (req, res) {   
    try {
          // Get all collections
          const collections = await mongoose.connection.db.collections();
  
          // Iterate over each collection and delete all documents
          for (const collection of collections) {
              await collection.deleteMany({}); // Empty filter to match all documents
          }
  
          res.send("All documents in all collections deleted successfully");
      } catch (error) {
          console.error("Error deleting documents:", error);
          res.status(500).send("Error deleting documents");
      }
  })
// Mongoose setup
const Port = 8001;

const MONGO_URL = 'mongodb+srv://tedyyohanes97:Peeman200@cluster1.vs1vunz.mongodb.net/Books';

mongoose.connect(MONGO_URL)
.then(() => console.log('connected to DB'))
.catch((error) => console.log(`${error} Sorry could not connect to db`));

app.listen(Port, '0.0.0.0', () => console.log(`Server running on ${Port}`));

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});