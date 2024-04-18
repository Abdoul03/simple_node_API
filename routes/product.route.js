const express = require("express");
const {
  AllProduct,
  ProductById,
  AddProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.post("/", AddProduct);
router.get("/", AllProduct);
router.get("/:id", ProductById);
router.put("/:id", UpdateProduct);
router.delete("/:id", DeleteProduct);

module.exports = router;
