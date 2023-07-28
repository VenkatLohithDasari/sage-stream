import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Genre name is required"],
    unique: true,
  },
});

const Genre = mongoose.models.Genre || mongoose.model("Genre", genreSchema);

export default Genre;
