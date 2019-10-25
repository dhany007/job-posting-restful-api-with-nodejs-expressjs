/* eslint-disable camelcase */
/* eslint-disable max-len */
const conn = require('../configs/db');

module.exports = {
  getJobs: (searchNameJob, searchNameCompany, sortBy, mode, limitStart, eachPage) => new Promise((resolve, reject) => {
    conn.query(`SELECT x.id_job, x.name_job, x.description_job, y.name_category, \
    x.salary, x.location_job, z.name_company, x.date_add, x.date_update \
    FROM job x \
    JOIN category y \
    ON x.category = y.id_category \
    JOIN company z \
    ON x.company = z.id_company \
    WHERE x.name_job LIKE ? and z.name_company LIKE ? \
    ORDER BY ${sortBy} ${mode} \
    LIMIT ?, ?`, ([searchNameJob, searchNameCompany, parseInt(limitStart), parseInt(eachPage)]), (err, result) => {
      
      console.log('Query result : ');
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  addJob: (data) => new Promise((resolve, reject) => {
    conn.query('INSERT INTO job SET ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  updateJob: (data, id_job) => new Promise((resolve, reject) => {
    conn.query('UPDATE job SET ? where id_job = ?', [data, id_job], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  deleteJob: (id_job) => new Promise((resolve, reject) => {
    conn.query('DELETE FROM job WHERE id_job = ?', id_job, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
};
