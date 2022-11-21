const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    cover: { type: String },
    year: { type: Number },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("albums", albumSchema);
