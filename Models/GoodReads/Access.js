import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AccessSchema = new Schema(
    { 
        country: {
            type:String
        },
        viewability: {
            type: String,
        },
        webReaderLink: {
            type: Number,
        },
        embeddable:{
            type:Boolean
        },
        publicDomain:{
            type:Boolean
        },
        textToSpeechPermission:{
            type:String,
        },
        epub:{
            isAvailable:{
                type:String,
            },
            acsTokenLink:{
                type:String,
            },
        },
        pdf: {
            type: Array,
        }, 
        accessViewStatus: {
            type:String,
        },
        searchDescription:{
            textSnippet:{
                type:String
            },
        },
        bookId:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Books"
        }], 
        salesID: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Sales",
            },
        ],  
 
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Access = mongoose.model("Access", AccessSchema);
export default Access ;
 
