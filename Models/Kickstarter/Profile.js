import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    id: { type: Number, required: true },
    project_id: { type: Number, required: true },
    state: { type: String, required: true },
    state_changed_at: { type: Number, required: true },
    name: { type: String, default: null },
    blurb: { type: String, default: null },
    background_color: { type: String, default: null },
    text_color: { type: String, default: null },
    link_background_color: { type: String, default: null },
    link_text_color: { type: String, default: null },
    link_text: { type: String, default: null },
    link_url: { type: String, default: null },
    show_feature_image: Boolean,
    background_image_opacity: Number,
    should_show_feature_image_section: Boolean,
    feature_image_attributes: Object // Consider defining this more if the structure is known
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
