const mongoose = require("mongoose");

const titlesSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Title name cannot be empty"] },
  year: { type: String, default: "" },
  type: { type: String, default: "", enum: {
    values: ['movie', 'series'],
    message: '{VALUE} is not supported'
  }},
  image: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  plot: { type: String, default: "" },
  genres: [{ type: String }],
  actors: [{ type: String }],
  playTime: { type: String },
  writers: [{ type: String }],
  isDeleted: { type: Boolean, default: false }
});

const Titles = mongoose.model("Titles", titlesSchema);
module.exports = Titles;