import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    { 
        accessToken: {
            type: String,
        },
        refreshToken: {
            type: String,
        },
        firstName: {
            type: String,
              required: true,
        },
        lastName: {
            type: String,
            required: true,
        }, 
        email: {
            type: String,
              required: true,
        },
        password: {
            type: String,
              required: true,
        }, 
        favoriteBooks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Books",
            },
        ], 
    },
    { timestamps: true },{ toJSON: { getters: true } }
);

const User = mongoose.model("User", UserSchema);
export default User;
