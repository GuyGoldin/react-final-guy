import { model } from "mongoose";
import { Schema } from "mongoose";

const roleSchema = new Schema({
  name: { type: String, unique: true },
});
const Role = model("Role", roleSchema);

export { Role };
