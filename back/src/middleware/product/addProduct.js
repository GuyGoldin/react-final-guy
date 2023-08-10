import { Category } from "../../db/models/category.js";
import { Product } from "../../db/models/product.js";

// Middleware to create a new product
export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    req.newProduct = newProduct;

    next();
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).send("An error occurred while creating the product");
  }
};

// Middleware to set category for the new product
export const setCategoryForProduct = async (req, res, next) => {
  try {
    const category = await Category.findById(req.body.category);

    if (!category) {
      return res.status(400).send("Invalid category");
    }

    req.newProduct.category._id = category._id;
    req.newProduct.category.name = category.name;

    next();
  } catch (error) {
    console.error("Error setting category for product:", error);
    return res
      .status(500)
      .send("An error occurred while setting category for the product");
  }
};

// Middleware to save the new product
export const saveNewProduct = async (req, res) => {
  try {
    await req.newProduct.save();
    return res.status(200).send("The product has been added successfully!");
  } catch (error) {
    console.error("Error saving new product:", error);
    return res
      .status(500)
      .send("An error occurred while saving the new product");
  }
};
