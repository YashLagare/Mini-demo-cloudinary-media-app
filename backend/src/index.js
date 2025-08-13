import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './DB/db.js';
import mediaRoutes from './routes/mediaRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // 50mb for base64 uploads

app.use("/api/media", mediaRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on PORT:"+PORT);
});