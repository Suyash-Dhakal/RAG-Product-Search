const express=require('express');
const router=express.Router();
const productController=require('../controllers/product.controller');

router.get('/create-all',productController.createProducts);

router.post('/search',productController.searchProducts);

module.exports=router;