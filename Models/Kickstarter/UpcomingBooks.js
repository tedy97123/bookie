import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UpcomingBooksSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        blurb: {
            type: String,
            required: true,
        },
        goal: {
            type: Number,
            required: true,
        },
        pledged: {
            type: Number,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        disable_communication: {
            type: Boolean,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        country_displayable_name: {
            type: String,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
        currency_symbol: {
            type: String,
            required: true,
        },
        currency_trailing_code: {
            type: Boolean,
            required: true,
        },
        deadline: {
            type: Number,
            required: true,
        },
        state_changed_at: {
            type: Number,
            required: true,
        },
        created_at: {
            type: Number,
            required: true,
        },
        launched_at: {
            type: Number,
            required: true,
        },
        staff_pick: {
            type: Boolean,
            required: true,
        },
        is_starrable: {
            type: Boolean,
            required: true,
        },
        backers_count: {
            type: Number,
            required: true,
        },
        static_usd_rate: {
            type: Number,
            required: true,
        },
        usd_pledged: {
            type: String,
            required: true,
        },
        converted_pledged_amount: {
            type: Number,
            required: true,
        },
        fx_rate: {
            type: Number,
            required: true,
        },
        usd_exchange_rate: {
            type: Number,
            required: true,
        },
        current_currency: {
            type: String,
            required: true,
        },
        usd_type: {
            type: String,
            required: true,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Creator", // Assuming your creator model is named "Creator"
            required: true,
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location", // Assuming your location model is named "Location"
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category", // Assuming your category model is named "Category"
            required: true,
        },
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video", // Assuming your video model is named "Video"
            required: true,
        },
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile", // Assuming your profile model is named "Profile"
            required: true,
        },
        spotlight: {
            type: Boolean,
            required: true,
        },
        urls: {
            type: Object,
            required: true,
        },
        percent_funded: {
            type: Number,
            required: true,
        },
        is_liked: {
            type: Boolean,
            required: true,
        },
        is_disliked: {
            type: Boolean,
            required: true,
        },
        is_launched: {
            type: Boolean,
            required: true,
        },
        prelaunch_activated: {
            type: Boolean,
            required: true,
        }, 
    },
    { timestamps: true, toJSON: { getters: true } }
);

const UpcomingBooks = mongoose.model("UpcomingBooks", UpcomingBooksSchema);

export default UpcomingBooks;
