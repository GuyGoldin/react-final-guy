import { model, mongo } from "mongoose";
import { Schema } from "mongoose";

const categorySchema = new Schema({
  name: String,
});

const Category = model("Category", categorySchema);

export { Category };
