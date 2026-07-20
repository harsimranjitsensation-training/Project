import { Product } from "../model/product.schema.js";

export const getProductsByCategory = async (req, res, next) => {
    const category = req.query;

    const query = category ? { category : category} : {};

    const products = await Product.find(query);

    res.status(200).json({
        message: "Products fetched successfully",
        data: products
    })
}