const authModel = require('../models/auth');
const setPass = require('../helpers/index');
const jwt = require('jsonwebtoken');
const configs = require('../configs/configs');

module.exports = {
  Register: (req, res) => {
    const {email, nameUser} = req.body;

    let password = req.body.password;
    const salt = setPass.genSalt(16);
    password = setPass.sha512(password, salt);

    const data = {
      email,
      salt,
      password,
      nameUser,
    };
    authModel.verifyEmail(email)
        .then((result) => {
          if (result.length == 0) {
            authModel.register(data)
                .then(() => {
                  // res.json(result)
                  res.send('\nUser registered successfully!');
                })
                .catch((err) => {
                  console.log(err);
                });
          } else {
            console.log(authModel.verifyEmail(email));
            res.send('Email has been used');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
  Login: (req, res) => {
    const {email, password} = req.body;

    authModel.verifyEmail(email)
        .then((result) => {
          if (result.length > 0) {
            const salt = result[0].salt;
            const pwHash = result[0].password;
            const id = result[0].id;
            const value = setPass.sha512(password, salt);
            const data = {id, email, pwHash};

            const token = jwt.sign(data, configs.jwtSecret, {expiresIn: '1h'});

            if (pwHash == value) {
              res.send({data, token});
            } else {
              res.send('email and password not macth');
            }
          } else {
            res.send('email is not available');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
