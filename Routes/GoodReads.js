import express from 'express';
import { goodReads } from '../Api/goodReads.js';
import Books from '../Models/GoodReads/Books.js';
import Sales from '../Models/GoodReads/Sales.js';
import Access from '../Models/GoodReads/Access.js';

const router = express.Router();

router.post("/goodReads", async (req, res) => {
    const title = req.body.title;
    try {
         const stringTitle = JSON.stringify(title);
         const newTitle = stringTitle.split(' ').join('+');
         const finalTitle = JSON.parse(newTitle);
         console.log(finalTitle)
        const books = await goodReads(finalTitle);

        const formattedBooks = books.items.map(item => {
            const volumeInfo = item.volumeInfo;
            const imageLinks = volumeInfo.imageLinks || {};
            const industryIdentifiers = volumeInfo.industryIdentifiers || [];
            const category = volumeInfo.categories ? volumeInfo.categories[0] : undefined;
        
            return {
                "id": item.id || "",
                "google_book": item.selfLink || "",
                "author_name": volumeInfo.authors ? volumeInfo.authors[0] : "",
                "description": volumeInfo.description || "",
                "isbn": industryIdentifiers.length > 0 ? industryIdentifiers[0].identifier : "",
                "page_count": volumeInfo.pageCount || 0,
                "maturity_rating": volumeInfo.maturityRating || "",
                "publish_year": volumeInfo.publishedDate || "",
                "image": imageLinks.thumbnail || "",
                "previewLink": volumeInfo.previewLink  || "",
                "publisher": volumeInfo.publisher || "",
                "title": volumeInfo.title || "",
                "category": category || ""
            };
        });

        const formattedSales = books.items.map(item => {
            const saleInfo = item.saleInfo;
            const listPrice = saleInfo.listPrice || {};
            const retail_price = listPrice.amount || ""; // Corrected this line
            const buyLink = saleInfo.buyLink;
        
            return {
                "retail_price": retail_price,
                "list_price": listPrice.amount || "", // Corrected this line
                "buy_link": buyLink ,
            };
        });

        const formattedAccess = books.items.map(item => {
            const access = item.accessInfo;
            const searchInfo = item.searchInfo || {};
            const epub = access.epub || {};
            const pdf = access.pdf || {};
        
            return {
                "country": access.country,
                "viewability": access.viewability || "",  
                "webReaderLink": searchInfo.webReaderLink ||  "" ,
                "embeddable": access.embeddable,
                "publicDomain": access.publicDomain, 
                "textToSpeechPermissions": access.textToSpeechPermissions || null,
                "epub": {
                    isAvailable:epub.isAvailable,
                    acsTokenLink:epub.acsTokenLink || "",
                },
                "pdf": {
                    isAvailable: pdf.isAvailable,
                },  
                "accessViewStatus": access.accessViewStatus,
                "searchDescription": {
                    "textSnippet": searchInfo.textSnippet || "" ,
                } ,
            };
        });

        for (let i = 0; i < formattedBooks.length; i++) {
            const formattedBook = formattedBooks[i];
            const formattedSale = formattedSales[i];
            const formattedAccesses = formattedAccess[i]
            try {
                const book = new Books({
                    id: formattedBook.id,
                    google_book: formattedBook.google_book,
                    author_name: formattedBook.author_name,
                    description: formattedBook.description,
                    isbn: formattedBook.isbn,
                    page_count: formattedBook.page_count,
                    category: formattedBook.category,
                    maturity_rating: formattedBook.maturity_rating,
                    publish_year: formattedBook.publish_year,
                    image: formattedBook.image,
                    previewLink: formattedBook.previewLink,
                    publisher: formattedBook.publisher,
                    title: formattedBook.title, 
                }); 
                const sales = new Sales({
                    retail_price: formattedSale.retail_price,
                    list_price: formattedSale.list_price,
                    buy_link: formattedSale.buy_link,
                    books: book._id
                });
                const access = new Access({
                    country: formattedAccesses.country,
                    viewability: formattedAccesses.viewability,  
                    webReaderLink: formattedAccesses.webReaderLink ,
                    embeddable: formattedAccesses.embeddable,
                    publicDomain: formattedAccesses.publicDomain, 
                    textToSpeechPermissions: formattedAccesses.textToSpeechPermissions,
                    epub: {
                        isAvailable:formattedAccesses.isAvailable,
                        acsTokenLink:formattedAccesses.acsTokenLink,
                    },
                    pdf: {
                        isAvailable: formattedAccesses.pdf.isAvailable,
                    },  
                    accessViewStatus: formattedAccesses.accessViewStatus,
                    searchDescription: {
                        textSnippet: formattedAccesses.searchDescription.textSnippet,
                    } 
                })
                await access.save();
                await sales.save();
                await book.save();
                console.log(`Book with id ${formattedBook.id} saved successfully.`);
            } catch (error) {
                console.error(`Error saving book with id ${formattedBook.id}: ${error}`);
            }
        }

        const savedBooks = await Books.find();
        res.status(200).json(books);  // Send the filtered single object as a JSON response
    } catch (error) {
        console.error("Error fetching Titles from goodReads", error.message);
        res.status(500).send("Error fetching data");  // Send an error response to the client
    }
});

export default router;
