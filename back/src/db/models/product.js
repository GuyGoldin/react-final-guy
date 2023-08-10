import { model, mongo } from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  title: { type: String },
  desc: { type: String },
  imgUrl: { type: String },
  price: { type: Number },
  category: {
    _id: { type: Schema.Types.ObjectId, ref: `Category` },
    name: { type: String, ref: `Category` },
  },
});

const Product = model("Product", productSchema);

export { Product };
