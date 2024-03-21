import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        short_name: {
            type: String,
            required: true,
        },
        displayable_name: {
            type: String,
            required: true,
        },
        localized_name: {
            type: String,
        },
        country: {
            type: String,
        },
        state: {
            type: String,
        },
        type: {
            type: String,
        },
        is_root: {
            type: Boolean,
        },
        expanded_country: {
            type: String,
        },
        urls: {
            type: Object, // Define this more if the structure is known
        }
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Location = mongoose.model("Location", LocationSchema);
export default Location;
