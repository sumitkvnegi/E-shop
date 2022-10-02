const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createReview,
    getReviews,
    deleteReview,
    getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//Get All Products
router.route("/products").get(getAllProducts);

router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);

//Create Product
router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

//Update And Delete Product
router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

//Get Product Detail
router.route("/product/:id").get(getProductDetails);

//Update Review
router.route("/review").put(isAuthenticatedUser, createReview);

//Get And Delete Review
router
    .route("/reviews")
    .get(getReviews)
    .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
