import express from "express";
import { getProductsByCategory } from "../controller/product.controller.js"; 

const router = express.Router();

router.get("/getProducts", getProductsByCategory);


export default router;
