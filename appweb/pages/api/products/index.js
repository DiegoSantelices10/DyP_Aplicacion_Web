import { dbConnect } from "utils/mongoose";
import Product from "models/product";

dbConnect();

export default async function handler(req, res) {
  const { method, body, url } = req;

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();
        return res.status(200).json(products);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        const newProduct = new Product(body);
        const saveProduct = await newProduct.save();
        return res.status(201).json(saveProduct);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "el metodo no es soportado" });
  }
}
