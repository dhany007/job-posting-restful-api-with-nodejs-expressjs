/* eslint-disable max-len */
/* eslint-disable camelcase */
const conn = require('../configs/db');

module.exports = {
  getCompany: () => new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM company`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  }),
  addCompany: (data) => new Promise((resolve, reject) => {
    conn.query('INSERT INTO company SET ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  updateCompany: (data, id_company) => new Promise((resolve, reject) => {
    conn.query('UPDATE company SET ? where id_company = ?', [data, id_company], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  deleteCompany: (id_company) => new Promise((resolve, reject) => {
    conn.query('DELETE FROM company WHERE id_company = ?', id_company, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
};
