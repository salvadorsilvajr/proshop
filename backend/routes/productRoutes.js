import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js'

// @desc     Fetch all products
// @desc     GET /api/products
// @desc     Public

router.get('/', asyncHandler(async (req, res) => {
   const products = await Product.find({})
   res.json(products)
})) 


// @desc     Fetch single product
// @desc     GET /api/products/:id
// @desc     Public

router.get('/:id', asyncHandler( async (req, res) => {
   const products =  await Product.findById(req.params.id)
   if(product) {
      res.json(product)
   } else {
      res.status(404)
      throw new Error('Product not Found ...')
   }
}) )

export default router 