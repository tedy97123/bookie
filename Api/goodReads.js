import axios from "axios";

async function goodReads(title){ 
        const Title = title;
        try {
            // Fetch book details using Open Library API
            const response = await axios.get(`https://openlibrary.org/search.json?q=${Title}`);
            const bookData = response.data; 
            return bookData;
        } catch (error) {
            console.error("Error fetching book data:", error.message);
            res.status(500).send("Error fetching book data");
        } 
}

export {goodReads};