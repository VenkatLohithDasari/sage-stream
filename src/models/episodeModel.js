import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
    anime_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Anime",
        required: true,
    },
    title: {
        type: String,
    },
    number: {
        type: Number,
        required: true,
    },
    air_date: {
        type: Date,
    },
    duration: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    video: [
        {
            videoLink: {
                type: String,
                required: true,
            },
            subtitleLink: {
                type: String,
            },
            isSubtitleSupported: {
                type: Boolean,
                default: false,
            },
            assLink: {
                type: String,
            },
            isAssSubtitleSupported: {
                type: Boolean,
                default: false,
            },
        },
    ],
});

episodeSchema.index({ anime_id: 1 });

const Episode = mongoose.models.episode || mongoose.model("episode", episodeSchema);

export default Episode;
