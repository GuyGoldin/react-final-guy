import { model, mongo } from "mongoose";
import { Schema } from "mongoose";

const contactSchema = new Schema({
  message: { type: String },
  fullName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
});

const Contact = model("Contact", contactSchema);

export { Contact };
