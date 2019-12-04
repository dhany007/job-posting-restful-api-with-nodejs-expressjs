/* eslint-disable camelcase */
const companyModels = require('../models/company');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user

module.exports = {
  getCompany: (req, res) => {
    companyModels.getCompany()
        .then((result) => {
          res.json({
            success: true,
            message: 'success get all company',
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
  getOneCompany: (req, res) => {
    const id_company = req.params.id_company;
    companyModels.getOnecompany(id_company)
        .then((result) => {
          res.json({
            success: true,
            message: 'success get one company',
            result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  addCompany: (req, res) => {
    const id_company = uuidv4();
    const {name_company, description_company} = req.body;
    const host = req.hostname;
    const filePath = req.protocol + '://' + host + ':' + process.env.PORT + '/src/images/' +req.file.filename;
    const logo = filePath;
    const data = {
      id_company,
      name_company,
      description_company,
      logo,
    }

    companyModels.addCompany(data)
        .then((result) => {
          res.json({
            success: true,
            message: 'success added a new company',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  updateCompany: (req, res) => {
    const id_company = req.params.id_company;
    const {name_company, description_company} = req.body;

    const logo = req.file.filename;
    console.log(logo);
    const data = {
      name_company,
      logo,
      description_company,
    };

    companyModels.updateCompany(data, id_company)
        .then((result) => {
          res.json({
            success: true,
            message: 'success updated company',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  deleteCompany: (req, res) => {
    const id_company = req.params.id_company;

    companyModels.deleteCompany(id_company)
        .then((result) => {
          res.json({
            success: true,
            message: 'success deleted company',
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
