import { Router } from "express";
import { Product } from "../db/models/product.js";
import { Category } from "../db/models/category.js";
import { isAdmin } from "../middleware/roles/isAdmin.js";
import { validateToken } from "../middleware/user/validateToken.js";
import {
  performUpdate,
  updateProduct,
} from "../middleware/product/updateProduct.js";
import {
  createProduct,
  saveNewProduct,
  setCategoryForProduct,
} from "../middleware/product/addProduct.js";

const router = Router();
router.post(
  "/addProduct",
  validateToken,
  isAdmin,
  createProduct,
  setCategoryForProduct,
  saveNewProduct
);
router.put(
  "/updateProduct/:productId",
  validateToken,
  isAdmin,
  updateProduct,
  performUpdate
);
router.delete(
  "/deleteProduct/:productId",
  validateToken,
  isAdmin,
  async (req, res) => {
    try {
      const { productId } = req.params;

      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found." });
      }

      res
        .status(200)
        .json({ message: "The product was deleted successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product." });
    }
  }
);

router.get("/", async (req, res) => {
  const products = await Product.find();
  return res.json(products).status(200);
});
router.get("/getCategoryList", async (req, res) => {
  const categories = await Category.find();
  return res.json(categories).status(200);
});

export { router as productRouter };
