import { model, mongo } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  userName: String,
  password: String,
  email: { type: String, unique: true },
  roles: [String],
});

const User = model("User", userSchema);

export { User };
