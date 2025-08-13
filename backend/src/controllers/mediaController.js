import cloudinary from "../config/cloudinary.js";
import Media from "../models/media.js";

export const uploadMedia = async (req, res) => {
  try {
    const { file } = req.body;

    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "No file provided" });
    }

    // upload to cloudinary
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });

    // url for Database
    const newMedia = await Media.create({
      url: result.secure_url,
      type: result.resource_type,
    });
    return res.status(201).json({ success: true, media: newMedia });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ createdAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
