const authModel = require('../models/auth')
const setPass = require('../helpers/index')
const jwt = require('jsonwebtoken')
const configs = require('../configs/configs')

module.exports = {
    Register: (req, res) => {
        let { email, password, name_user } = req.body

        const salt = setPass.generateSalt(16)
        password = setPass.sha512(password,salt)
        
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
                
                console.log(authModel.verifyEmail(email))
                res.send('Email has been used')
            }
        })
        .catch(err => {
            console.log(err)
        })        
    },
    Login: (req, res) => {
        let { email, password } = req.body 
        
        authModel.verifyEmail(email)
        .then(result => {
            if(result.length > 0){
                const salt = result[0].salt
                const pwHash = result[0].password
                const id = result[0].id
                const value = setPass.sha512(password, salt)
                const data = {id, email, pwHash}

                const token = jwt.sign(data, configs.jwtSecret, { expiresIn: '1h' })

                if(pwHash == value){
                    res.send({ data, token })
                } else {
                    res.send('email and password not macth')
                }

            } else {
                res.send('email is not available')
            }
        })
        .catch(err => {
            console.log(err)
        })     
    }
}