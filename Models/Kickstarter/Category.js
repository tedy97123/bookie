import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        analytics_name: {
            type: String,
        },
        slug: {
            type: String,
        },
        position: {
            type: Number,
        },
        parent_id: {
            type: Number,
        },
        parent_name: {
            type: String,
        },
        color: {
            type: Number,
        },
        urls: {
            type: Object, // Adjust this if the structure of URLs is known and consistent
        },
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;
