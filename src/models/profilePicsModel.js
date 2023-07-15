import mongoose from "mongoose";

const profilePicsSchema = new mongoose.Schema({
    name: String,
    pics: Array,
});

const ProfilePics = mongoose.models.profilepics || mongoose.model("profilepics", profilePicsSchema);

export default ProfilePics;
