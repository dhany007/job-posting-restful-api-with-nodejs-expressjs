const authModel = require('../models/auth')
const authHelper = require('../helpers/index')
const setPass = require('../helpers/index')
const conn = require('../configs/db')

module.exports = {
    Register: (req, res) => {
        let { email, password, name_user } = req.body

        const passHash = setPass.saltHashPassword(password)
        
        const salt = passHash.salt
        password = passHash.value

        let data = {
            email,
            salt,
            password,
            name_user
        }
        authModel.verifyEmail(email)
        .then(result => {
            if(result.length == 0){
                authModel.Register(data)
                .then(result => {
                    //res.json(result)
                    res.send("\nUser registered successfully!");
                })
                .catch(err => {
                    console.log(err)
                })
            } else {
                res.send('Email has been used')
            }
        })
        .catch(err => {
            console.log(err)
        })        
    },
    Login: (req, res) => {
                
    },
}