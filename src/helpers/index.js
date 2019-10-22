const crypto = require('crypto')

module.exports = {
    response: (res, status, data) => {
        console.log('Response')
    },
    customErrorResponse: (res, status, message) => {
        console.log('Error Response!')
    },
    generateValHex: (length) => {
        console.log('Generate Value in Hex')
    },
    setPassword: (password, valHex) => {
        const hash = crypto.createHmac('sha5123', valHex)
        hash.update(password)
        const value = hash.digest('hex')
        return {
            valHex: valHex,
            passwordHash: value
        }
    }
}