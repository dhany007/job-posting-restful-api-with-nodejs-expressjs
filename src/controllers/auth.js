/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const authModel = require('../models/auth');
const setPass = require('../helpers/index');
const jwt = require('jsonwebtoken');
const configs = require('../configs/configs');
const validator = require('validator');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user

module.exports = {
  Register: (req, res) => {
    const {email, name_user} = req.body;
    const id = uuidv4();

    if (validator.isEmpty(email) || validator.isEmpty(name_user)) {
      res.json({
        success: false,
        message: 'please fill all fields',
      });
      return;
    }

    if (!validator.isEmail(email)) {
      res.send({
        success: false,
        Message: 'Invalid email address',
      });
      return;
    }

    let password = req.body.password;
    const salt = setPass.genSalt(16);
    password = setPass.sha512(password, salt);

    const formRegis = {
      id,
      email,
      salt,
      password,
      name_user,
    };
    const data = {
      email,
      name_user,
    };

    authModel.verifyEmail(email)
        .then((r) => {
          if (r.length == 0) {
            authModel.register(formRegis)
                .then(() => {
                  res.json({
                    success: true,
                    message: 'User registered in successfully',
                    data,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
          } else {
            res.send({
              success: false,
              Message: 'Email has been used',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
  Login: (req, res) => {
    const {email, password} = req.body;
    
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
      res.json({
        success: false,
        message: 'You did not enter a email or a password.',
      });
      return;
    }
    authModel.verifyEmail(email)
        .then((r) => {
          if (r.length > 0) {
            const salt = r[0].salt;
            const pwHash = r[0].password;
            const id = r[0].id;
            const name = r[0].name_user;
            const value = setPass.sha512(password, salt);
            const dataJWT = {id, email};

            const data = {
              email,
              name,
            };

            const token = jwt.sign(dataJWT, configs.jwtSecret, {expiresIn: '1h'});

            if (pwHash == value) {
              res.json({
                success: true,
                message: 'User logged in successfully',
                data,
                token,
              });
            } else {
              res.json({
                success: false,
                message: `Sorry, that password isn't right.`,
              });
            }
          } else {
            res.json({
              success: false,
              message: `Sorry, we couldn't find an account with that email.`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
