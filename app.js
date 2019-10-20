require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.port || 3000

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conn.connect((err) => {
    if (err) {
        console.log(`Error : ${err}\n`)
    } else {
        console.log('\nDatabase connected!\n')
    }
})

conn.end((err) => {
    if (err) {
        console.log(`Error : ${err}\n`)
    } else {
        console.log('\nDatabase closed!')
    }
})

app.listen(port, () => {
    console.log(`\nServer listening on port ${port}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Created endpoint!')
})

app.post('/', (req, res) => {
    const body = req.body.string

    res.send(body)
})

app.get('/:dataId', (req, res) => {
    const dataId = req.params.dataId

    if (parseInt(dataId) === 1) {
        res.send('Data 1')
    } else {
        res.send('Data 2')
    }
})

module.exports = app