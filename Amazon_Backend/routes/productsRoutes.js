const express = require("express");
const productsController = require('../contollers/productsController.js')
const productRouter = express.Router();

productRouter.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.addProducts);
    
productRouter.route('/:id')
.put(productsController.replaceProduct)
.delete(productsController.deleteProduct);

module.exports = productRouter;