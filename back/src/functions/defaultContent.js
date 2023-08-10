import { Category } from "../db/models/category.js";
import { Contact } from "../db/models/contact.js";
import { Product } from "../db/models/product.js";
import { User } from "../db/models/user.js";
import bcrypt from "bcryptjs";
import {
  defaultCategories,
  defaultContacts,
  defaultProducts,
  defaultUsers,
} from "../utils/utils.js";
import { getRandomItemFromArray } from "./getRandomItemFromArray.js";

export const defaultContent = async () => {
  // Default User ----------------
  const isUserExist = await User.find();
  if (isUserExist.length === 0) {
    for (const item of defaultUsers) {
      let newUser = new User(item);
      const hashedPassword = await bcrypt.hash(item.password, 8);
      newUser.password = hashedPassword;
      await newUser.save();
    }
    console.log(`Default Users created!`);
  }

  // Default Categories -------------------------
  const isCategoriesExist = await Category.find();
  if (isCategoriesExist.length === 0) {
    for (const item of defaultCategories) {
      const newCategory = new Category(item);
      await newCategory.save();
    }
    console.log(`Default Categories created!`);
  }

  // Default Products -------------------------
  const isProductExist = await Product.find();
  if (isProductExist.length === 0) {
    const categories = await Category.find();
    for (const item of defaultProducts) {
      const randomCategory = getRandomItemFromArray(categories);
      let newProduct = new Product(item);
      newProduct.category._id = randomCategory?._id;
      newProduct.category._name = randomCategory?.name;
      await newProduct.save();
    }
    console.log(`Default Products created!`);
  }
  // Default Contacts -------------------------
  const isContactsExist = await Contact.find();
  if (isContactsExist.length === 0) {
    for (const item of defaultContacts) {
      const newContact = new Contact(item);
      await newContact.save();
    }
    console.log(`Default Contact created!`);
  }
};
