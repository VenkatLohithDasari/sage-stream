const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  anime_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime', // Reference to the Anime Collection
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
});

episodeSchema.index({ anime_id: 1 });

const Episode = mongoose.models.episode || mongoose.model('episode', episodeSchema);

module.exports = Episode;
