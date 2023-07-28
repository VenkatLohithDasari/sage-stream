import mongoose from "mongoose";

const animeGenreMapSchema = new mongoose.Schema({
    anime_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Anime",
        required: [true, "Anime ID is required"],
    },
    genre_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
        required: [true, "Genre ID is required"],
    },
});

animeGenreMapSchema.index({ anime_id: 1, genre_id: 1 }, { unique: true });
animeGenreMapSchema.index({ anime_id: 1 });
animeGenreMapSchema.index({ genre_id: 1 });

const Anime_Genre_Map =
    mongoose.models.Anime_Genre_Map ||
    mongoose.model("Anime_Genre_Map", animeGenreMapSchema);

export default Anime_Genre_Map;
