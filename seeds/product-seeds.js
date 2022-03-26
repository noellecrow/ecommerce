const { Product } = require('../models');

const productData = [
    {
        product_name: 'T-Shirt',
        price: 19.99,
        stock: 10,
        category_id: 1,
    },
    {
        product_name: 'Running Shorts',
        price: 39.99,
        stock: 8,
        category_id: 2,
    },
    {
        product_name: 'Purple Rain Prince Vinyl Record',
        price: 29.99,
        stock: 2,
        category_id: 3,
    },
    {
        product_name: 'Baseball Cap',
        price: 14.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: 'Nike Metcons',
        price: 139.99,
        stock: 11,
        category_id: 5,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
