const crypto = require('crypto')

module.exports = {
    response: (res, status, data) => {
        console.log('Response')
    },
    customErrorResponse: (res, status, message) => {
        console.log('Error Response!')
    },
    saltHashPassword: (userPassword) => {
        const salt = crypto.randomBytes(Math.ceil(16 / 2)).toString('hex').slice(0, 16)
        const hash = crypto.createHmac('sha512', salt)
        hash.update(userPassword)
        const value = hash.digest('hex')
        return value
    }

}