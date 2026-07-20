import express from "express";
import dotenv from "dotenv";
import authRouter from "./api/router/auth.router.js";
import productRouter from "./api/router/product.router.js"
import cors from "cors";
const app = express();

//  config:
dotenv.config();

//  middlewares
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

//  routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

//  http://localhost:5000/api/auth/signup

export default app;
