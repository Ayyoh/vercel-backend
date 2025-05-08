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
    origin: 'https://vercel-frontend-wwjs.onrender.com/',
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use("/api/products", productRouter)

app.get("/api", (req, res) => {
    console.log(`Working`)
    res.send(`Working`)
})

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Running on Port ${process.env.PORT}`)
})
