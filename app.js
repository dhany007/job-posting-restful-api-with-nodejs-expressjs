require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.port || 3000

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