/* eslint-disable camelcase */
const categoryModels = require('../models/category');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user

module.exports = {
  getCategory: (req, res) => {
    categoryModels.getCategory()
        .then((result) => {
          res.json({
            success: true,
            message: 'success get all category',
            info: {
              count: result.length,
            },
            result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  addCategory: (req, res) => {
    const {name_category} = req.body;
    const id_category = uuidv4();

    const data = {
      id_category,
      name_category,
    };

    categoryModels.addCategory(data)
        .then((r) => {
          res.json({
            success: true,
            message: 'Success added a new category',
            result: name_category,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  updateCategory: (req, res) => {
    const id_category = req.params.id_category;
    const data = req.body;

    categoryModels.updateCategory(data, id_category)
        .then((r) => {
          console.log(r);
          res.json({
            success: true,
            message: 'success updated category',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  deleteCategory: (req, res) => {
    const id_category = req.params.id_category;

    categoryModels.deleteCategory(id_category)
        .then((result) => {
          res.json({
            success: true,
            message: 'success deleted data',
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
