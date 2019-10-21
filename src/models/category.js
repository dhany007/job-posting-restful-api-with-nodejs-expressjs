const conn = require('../configs/db')

module.exports = {
    getCategory: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })    
        })
    },
    addCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO category SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    },
    updateCategory: (data, id_category) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE category SET ? where id_category = ?', [data, id_category], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    },
    deleteCategory: (id_category) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM category where id_category = ?', id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    },
}