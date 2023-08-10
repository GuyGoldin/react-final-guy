import { Category } from "../../db/models/category.js";
import { Product } from "../../db/models/product.js";

// Middleware to update product
export const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    // Pass the product object to the next middleware
    req.product = product;

    next(); // Continue to the next middleware
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send("An error occurred while updating the product");
  }
};

// Middleware to perform the actual update
export const performUpdate = async (req, res, next) => {
  try {
    const product = req.product; // Get the product object from the request

    let updatedProduct = req.body;
    let category = await Category.findById(req.body.category);

    if (!category) {
      return res.status(400).send("Invalid category");
    }

    updatedProduct.category = { name: category.name, _id: category._id };
    Object.assign(product, updatedProduct);

    await product.save();

    return res.status(200).send("The product updated successfully!");
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send("An error occurred while updating the product");
  }
};
