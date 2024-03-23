import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BooksSchema = new Schema(
    {
        author_name: {
            type: String,
        },
        first_publish_year: {
            type: Number,
        },
        isbn: {
            type: Array,
        },
        number_of_pages_median: {
            type: Number,
        },
        publish_year: {
            type: Array,
        },
        publisher: {
            type: Array,
        },
        title: {
            type: Array,
        },
        first_sentence: {
            type: String
        }
 
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Books = mongoose.model("Books", BooksSchema);
export default Books;
