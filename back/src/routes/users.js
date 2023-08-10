import { Router } from "express";
import _ from "underscore";
import { User } from "../db/models/user.js";
import { Role } from "../db/models/role.js";
import jwt from "jsonwebtoken";
import authConfig from "../db/config/auth.config.js";
import bcrypt from "bcryptjs";
const router = Router();

router.post(`/login`, async (req, res) => {
  const { Email: email, Password: password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user?.password);

    if (!isPasswordValid) {
      return res.status(401).send("Invalid password.");
    }

    const token = jwt.sign({ id: user._id }, authConfig.secret, {
      expiresIn: "30d",
    });

    const authorities = user.roles;

    return res.status(200).json({
      name: user.userName,
      id: user.id,
      email: `${email}`,
      roles: authorities,
      token,
      msg: `You logged succesfully!`,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Error during login.");
  }
});

router.post("/register", async (req, res) => {
  const { Name: userName, Email: email, Password: password } = req.body;
  let isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    return res.send(`Email is already exist`).status(500);
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
    roles: [`user`],
  });
  await newUser.save();
  return res.send(`You registered and logged in successfully!`).status(200);
});
export { router as authRouter };
