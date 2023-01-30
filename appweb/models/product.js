import { model, models, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El campo es requerido."],
      unique: true,
      trim: true,
      maxlength: [40, "El maximo es de 40 caracteres"],
    },
    price: {
      type: Number,
      required: [true, "El campo es requerido."],
      trim: true,
      maxlength: [10, "El maximo es de 40 caracteres"],
    },
    description: {
      type: String,
      required: [true, "El campo es requerido."],
      trim: true,
      maxlength: [100, "El maximo es de 40 caracteres"],
    },
    category: {
      type: String,
      required: [true, "El campo es requerido."],
      trim: true,
      maxlength: [40, "El maximo es de 40 caracteres"],
    },
    image: {
      url: String,
      public_id: String,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default models.product || model("product", productSchema);
