import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
    { 
        key: {
            type: String,
            required: true,
        },
        full: {
            type: String,
            required: true,
        },
        ed: {
            type: String,
            required: true,
        },
        med: {
            type: String,
            required: true,
        },
        little: {
            type: String,
            required: true,
        }, 
        small: {
            type: String,
            required: true,
        },
        thumb: {
            type: String,
            required: true,
        },
        '1024x576': {
            type: String,
        },
        '1536x864': {
            type: String,
        },
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Photo = mongoose.model("Photo", PhotoSchema);
export default Photo;
