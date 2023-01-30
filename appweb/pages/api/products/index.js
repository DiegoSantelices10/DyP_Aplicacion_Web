import dbConnect from "utils/mongoose";
import Product from "models/product";
import { uploadImage } from "libs/cloudinary";
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
        const { name, price, description, category, image } = body;
        let imageCloud;
        if (image) {
          const result = await uploadImage(image);

          imageCloud = {
            url: result.secure_url,
            public_id: result.public_id,
          };
        }

        const newProduct = new Product({
          name,
          price,
          description,
          category,
          image: imageCloud,
        });
        await newProduct.save();
        return res.status(200).json(newProduct);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "el metodo no es soportado" });
  }
}
