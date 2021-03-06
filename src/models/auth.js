const conn = require('../configs/db');

module.exports = {
  verifyEmail: (email) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  register: (data) => new Promise((resolve, reject) => {
    conn.query('INSERT INTO users SET ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
};
