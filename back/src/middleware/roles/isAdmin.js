import { Role } from "../../db/models/role.js";
import { User } from "../../db/models/user.js";
const isAdmin = async (req, res, next) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    //user.roles = ['63e1fb4ff70ed483ab2fe1ad', '63e1fb4ff70ed483ab2fe1ab', '63e1fb4ff70ed483ab2fe1ac']
    //user.roles = ['63e1fb4ff70ed483ab2fe1ad']
    //~populate

    for (let role of user.roles) {
      if (role === "admin" || "moderator" || "manager") {
        return next();
      }
    }
    return res.status(403).json({ message: "Requires Admin Role" });
  } catch (e) {
    return res.status(500).json({ message: "Requires Admin Role", error: e });
  }
  //find the user role => if admin =>
};

export { isAdmin };
