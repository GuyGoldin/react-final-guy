import { Router } from "express";
import { Contact } from "../db/models/contact.js";

const router = Router();

router.post("/contact", async (req, res, next) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  return res.send(`Your contact is sent successfully`).status(200);
});

export { router as generalRouter };
