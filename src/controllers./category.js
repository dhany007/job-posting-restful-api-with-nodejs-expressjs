/* eslint-disable camelcase */
const categoryModels = require('../models/category');

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
    const name = req.body;

    categoryModels.addCategory(name)
        .then((r) => {
          res.json({
            success: true,
            message: 'Success added a new category',
            result: name,
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
