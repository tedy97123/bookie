import express from 'express';
import { goodReads } from '../Api/goodReads.js';
import Books from '../Models/GoodReads/Books.js';
import Sales from '../Models/GoodReads/Sales.js';
import Access from '../Models/GoodReads/Access.js';

const router = express.Router();

router.post("/goodReads", async (req, res) => {
    const { title } = req.body; // Destructure the title directly
    try {
        const formattedTitle = title.split(' ').join('+');
        console.log(formattedTitle);
        const books = await goodReads(formattedTitle);

        const bookPromises = books.items.map(async (item) => {
            const volumeInfo = item.volumeInfo;
            const imageLinks = volumeInfo.imageLinks || {};
            const industryIdentifiers = volumeInfo.industryIdentifiers || [];
            const category = volumeInfo.categories ? volumeInfo.categories[0] : undefined;

            const formattedBook = {
                id: item.id || "",
                google_book: item.selfLink || "",
                author_name: volumeInfo.authors ? volumeInfo.authors[0] : "",
                description: volumeInfo.description || "",
                isbn: industryIdentifiers.length > 0 ? industryIdentifiers[0].identifier : "",
                page_count: volumeInfo.pageCount || 0,
                maturity_rating: volumeInfo.maturityRating || "",
                publish_year: volumeInfo.publishedDate || "",
                image: imageLinks.thumbnail || "",
                previewLink: volumeInfo.previewLink || "",
                publisher: volumeInfo.publisher || "",
                title: volumeInfo.title || "",
                category: category || ""
            };

            try {
                const book = new Books(formattedBook);
                await book.save();

                const saleInfo = item.saleInfo;
                const listPrice = saleInfo.listPrice || {};
                const retail_price = listPrice.amount || "";
                const sales = new Sales({
                    retail_price: retail_price,
                    list_price: listPrice.amount || "",
                    buy_link: saleInfo.buyLink,
                    bookId: book._id
                });
                await sales.save();

                const access = new Access({
                    country: item.accessInfo.country,
                    viewability: item.accessInfo.viewability || "",
                    webReaderLink: item.searchInfo?.webReaderLink || "",
                    embeddable: item.accessInfo.embeddable,
                    publicDomain: item.accessInfo.publicDomain,
                    textToSpeechPermissions: item.accessInfo.textToSpeechPermissions,
                    epub: {
                        isAvailable: item.accessInfo.epub?.isAvailable,
                        acsTokenLink: item.accessInfo.epub?.acsTokenLink || "",
                    },
                    pdf: {
                        isAvailable: item.accessInfo.pdf?.isAvailable,
                    },
                    accessViewStatus: item.accessInfo.accessViewStatus,
                    searchDescription: {
                        textSnippet: item.searchInfo?.textSnippet || "",
                    },
                    bookId: book._id,
                    salesId: sales._id
                });
                await access.save();

                // Update salesId and accessId in Books model
                await Books.findByIdAndUpdate(book._id, { $set: { salesId: sales._id, accessId: access._id } });
                await Sales.findByIdAndUpdate(sales._id, { accessId: access._id });

                return book;
            } catch (error) {
                console.error(`Error saving book with id ${formattedBook.id}: ${error}`);
                return null;
            }
        });

        const savedBooks = await Promise.all(bookPromises);
        const filteredBooks = savedBooks.filter(book => book !== null);
        res.status(200).json(filteredBooks);
    } catch (error) {
        console.error("Error fetching Titles from goodReads", error.message);
        res.status(500).send("Error fetching data");
    }
});

export default router;
