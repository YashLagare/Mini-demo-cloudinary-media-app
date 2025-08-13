import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  url: String,
  type: { type: String, enum: ["image", "video"], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Media", mediaSchema);
