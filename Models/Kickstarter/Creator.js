import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CreatorSchema = new Schema(
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
        },
        is_registered: {
            type: Boolean,
        },
        is_email_verified: {
            type: Boolean,
        },
        chosen_currency: {
            type: Boolean,
        },
        is_superbacker: {
            type: Boolean,
        },
        avatar: {
            type: Object,
        }, 
        urls: {
            type: Object, // Define this more if the structure is known
        },
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Creator = mongoose.model("Creator", CreatorSchema);
export default Creator;
