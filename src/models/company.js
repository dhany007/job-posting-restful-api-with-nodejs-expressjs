const conn = require('../configs/db')

module.exports = {
    getCompany: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM company`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })    
        })
    }
}