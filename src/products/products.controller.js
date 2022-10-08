const uuid = require('uuid')
const Products = require('../models/products.models')

const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
};

const createProduct = async (data) => {
    const newProduct = Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    }) 
    return newProduct
};

const getProductById = async (id) => {
    const data = await Products.findOne({
        where:{
            id
        }
    })
    return data
};

const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where:{
            id
        }
    })
    return response
};
 
// editProduct("3dce3c6e-7906-4095-85a9-45d8f92460df", {
//     name:"vino"
// })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where:{
            id
        }
    })
    return data
};


// deleteProduct("3dce3c6e-7906-4095-85a9-45d8f92460df")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    editProduct,
    deleteProduct
}