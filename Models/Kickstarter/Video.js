import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        hls: {
            type: String,
            required: true,
        },
        hls_type: {
            type: String,
            required: true,
        },
        high: {
            type: String,
            required: true,
        },
        high_type: {
            type: String,
            required: true,
        },
        base: {
            type: String,
            required: true,
        },
        base_type: {
            type: String,
            required: true,
        },
        tracks: [String],
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        frame: {
            type: String,
            required: true,
        }
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Video = mongoose.model("Video", VideoSchema);
export default Video;
