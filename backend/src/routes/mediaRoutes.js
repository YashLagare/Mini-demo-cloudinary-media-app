import express from "express";
import { getAllMedia, uploadMedia } from "../controllers/mediaController.js";

const router = express.Router();

router.post("/upload", uploadMedia);
router.get("/", getAllMedia);

export default router;
