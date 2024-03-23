import express from 'express';
import { goodReads } from '../Api/goodReads.js';
import Books from '../Models/GoodReads/Books.js';

const router = express.Router();

router.post("/goodReads", async (req, res) => {
    const title = req.body.title;
    console.log(title);

    try {
        // const stringTitle = JSON.stringify(Title);
        // const newTitle = stringTitle.split(' ').join('+');
        // const finalTitle = JSON.parse(newTitle);
        const books = await goodReads(title);
        // const lookInfo = await books.docs;

        // const updateBookEntry = await Books.insertMany(
        //  [
        //     {
        //         "author_name": lookInfo.author_name,
        //         "first_publish_year": lookInfo.first_publish_year,
        //         "isbn": lookInfo.isbn,
        //         "number_of_pages_median": lookInfo.number_of_pages_median,
        //         "publish_year": lookInfo.publish_year,
        //         "publisher":  lookInfo.publisher,
        //         "title": lookInfo.title,
        //         "first_sentence": lookInfo.first_sentence
        //     },
        //  ],
        // );

        // const newBook = await Books.findById({'_id': updateBookEntry._id})
        // console.log(newBook)
        // // for(let i = 0; i < lookInfo.isbn.length; i++){
        // //     const isbn = lookInfo.isbn[i]
        // //     await newBook.updateOne({"isbn": isbn})
        // // }
        // // for(let i = 0; i < lookInfo.publish_year.length; i++){
            
        // // }
        // // for(let i = 0; i < lookInfo.publisher.length; i++){
            
        // // }
        // // for(let i = 0; i < lookInfo.title.length; i++){
            
        // // }
    
        res.status(200).json(books);  // Send the filtered single object as a JSON response
    } catch (error) {
        console.error("Error fetching Titles from goodReads", error.message);
        res.status(500).send("Error fetching data");  // Send an error response to the client
    }
});

export default router;
