import express from 'express';
import {kickstarter}  from '../Api/kickStarter.js'

const router = express.Router();

router.get("/kickstarter", async (req, res) => {
    try {
        const books = await kickstarter();  // Corrected function name
         res.status(200).json(books);  // Send the books data as a JSON response
    } catch (error) {
        console.error("Error fetching Descriptions", error.message);
        res.status(500).send("Error fetching data");  // Send an error response to the client
    }
});

export default router;

