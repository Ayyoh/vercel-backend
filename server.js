import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectDB } from './config/db.js'
import productRouter from './routers/product.router.js'
import path from 'path'

dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use("/api/products", productRouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/dist')))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    })
} 

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Running on Port ${process.env.PORT}`)
})