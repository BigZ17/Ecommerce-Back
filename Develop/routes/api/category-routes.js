const router = require('express').Router();
const sequelize = require('../../config/connection')
const { Category, Product } = require('../../models');
const { get } = require('./product-routes');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include:[
      {
        model: Product,
        attributes: [],
        
      }
    ]
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
