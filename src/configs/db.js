const mysql = require('mysql')

const connection = mysql.createConnection(this.config.database.mysql)

connection.connect((err) => {
    if (err) {
        console.log(`Error : ${err}\n`)
    } else {
        console.log('\nDatabase connected!\n')
    }
})

module.exports = connection