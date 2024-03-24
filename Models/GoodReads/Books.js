import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BooksSchema = new Schema(
    {
        id: {
            type: String,
        },
        google_book: {
            type:String
        },
        author_name: {
            type: String,
        }, 
        description: {
            type:String,
        },
        isbn: {
            type: String, // Change to String
        },
        page_count: {
            type: Number,
        },
        category:{
            type:String
        },
        maturity_rating:{
            type: String
        },
        publish_year: {
            type: String, // Change to String
        },
        image: [
            {
               data:Buffer,type:Schema.Types.String
            },
          ], 
        previewLink: {
            type:String
        },
        publisher: {
            type: String, // Change to String
        },
        title: {
            type: String, // Change to String
        },
        salesId: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Sales",
            },
          ], 
          accessID: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Access",
            },
          ], 
    },
    { timestamps: true, toJSON: { getters: true } }
);


const Books = mongoose.model("Books", BooksSchema);
export default Books;
