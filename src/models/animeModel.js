import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    synopsis: {
        type: String,
    },
    picture: {
        type: String,
        required: [true, "Picture URL is required"],
    },
    characters: [
        {
            name: String,
            picture: String,
            role: String,
            link: String,
            seiyuu: {
                link: String,
                name: String,
                picture: String,
            },
        },
    ],
    staff: [
        {
            name: String,
            role: String,
            picture: String,
            link: String,
        },
    ],
    trailer: {
        type: String,
    },
    englishTitle: {
        type: String,
    },
    synonyms: {
        type: String,
    },
    type: {
        type: String,
        enum: ["TV", "OVA", "Movie", "Special"],
        required: [true, "Type is required"],
    },
    episodes: {
        type: String,
    },
    status: {
        type: String,
    },
    aired: {
        type: String,
    },
    premiered: {
        type: String,
    },
    broadcast: {
        type: String,
    },
    volumes: {
        type: String,
    },
    chapters: {
        type: String,
    },
    published: {
        type: String,
    },
    authors: {
        type: String,
    },
    serialization: {
        type: String,
    },
    producers: [
        {
            name: String,
        },
    ],
    studios: [
        {
            name: String,
        },
    ],
    source: {
        type: String,
    },
    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Genre",
        },
    ],
    duration: {
        type: String,
    },
    rating: {
        type: String,
    },
    score: {
        type: String,
    },
    scoreNumeric: {
        type: Number,
    },
    scoreStats: {
        type: String,
    },
    ranked: {
        type: String,
    },
    rankedNumeric: {
        type: Number,
    },
    popularity: {
        type: String,
    },
    popularityNumeric: {
        type: Number,
    },
    members: {
        type: String,
    },
    favorites: {
        type: String,
    },
    id: Number,
    url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    addedEpisodes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Episode",
        },
    ],
});

animeSchema.index({ title: 1, englishTitle: 1 });
animeSchema.index({ englishTitle: 1 });
animeSchema.index({ title: 1 });
animeSchema.index({ genres: 1, status: 1, premiered: 1, rating: 1 });
animeSchema.index({ status: 1 });
animeSchema.index({ premiered: 1 });
animeSchema.index({ rating: 1 });
animeSchema.index({ rankedNumeric: 1 });
animeSchema.index({ popularityNumeric: 1 });
animeSchema.index({ scoreNumeric: 1 });
animeSchema.index({ updatedAt: 1 });

const Anime = mongoose.models.anime || mongoose.model("anime", animeSchema);

export default Anime;
