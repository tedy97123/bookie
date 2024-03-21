import express from 'express';
import {goodReads} from '../Api/goodReads.js'

const router = express.Router();

router.post("/goodReads", async (req, res) => {
    const Title = req.body.title  
    console.log(Title)
    try {
        const stringTitle = JSON.stringify(Title)
        const newTitle = stringTitle.split(' ').join('+');
        const finalTitle = JSON.parse(newTitle);
        const books = await goodReads(finalTitle);  // Corrected function name
         res.status(200).json(books);  // Send the books data as a JSON response
    } catch (error) {
        console.error("Error fetching Titles from goodReads", error.message);
        res.status(500).send("Error fetching data");  // Send an error response to the client
    }
});

export default router;

