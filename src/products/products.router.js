const router = require('express').Router()

const productsServices = require('./products.services')

//? path  /products

router.get('/', productsServices.getAllProducts)
router.post('/', productsServices.postProduct)

//? path /products:id

router.get('/:id', productsServices.getProductById)
router.patch('/:id', productsServices.patchProduct)
router.delete('/:id', productsServices.deleteProduct)

module.exports = router 