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
    conn.query(`SELECT x.name_job, x.description_job, y.name_category, \
    x.salary, x.location_job, z.name_company, x.date_add, x.date_update \
    FROM job x \
    JOIN category y ON x.category = y.id_category \
    JOIN company z ON x.company = z.id_company`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })    
})

app.get('/category', (req, res) => {
    conn.query('SELECT * FROM category', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.get('/company', (req, res) => {
    conn.query('SELECT * FROM company', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/category', (req, res) => {
    const { name_category } = req.body
    const data = { name_category }

    conn.query('INSERT INTO category SET ?', data, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/company', (req, res) => {
    const { name_company, logo, description_company } = req.body
    const data = {name_company, logo, description_company }

    conn.query('INSERT INTO company SET ?', data, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/job', (req, res) => {
    const { name_job, description_job, category, salary, location_job, company } = req.body
    const data = { name_job, description_job, category, salary, location_job, company}

    conn.query('INSERT INTO job SET ?', data, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.patch('/category/:id_category', (req, res) => {
    const id_category = req.params.id_category
    const { name_category } = req.body
    const data = { name_category }

    conn.query('UPDATE category SET ? where id_category = ?', [data, id_category], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.patch('/company/:id_company', (req, res) => {
    const id_company = req.params.id_company
    const { name_company, logo, description_company } = req.body
    const data = { name_company, logo, description_company }

    conn.query('UPDATE company SET ? where id_company = ?', [data, id_company], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.patch('/job/:id_job', (req, res) => {
    const id_job = req.params.id_job
    const date_update = Date(Date.now()).toString()
    const { name_job, description_job, category, salary, location_job, company} = req.body
    console.log(date_update)
    const data = { name_job, description_job, category, salary, location_job, company, date_update }

    conn.query('UPDATE job SET ? where id_job = ?', [data, id_job], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.delete('/category/:id_category', (req, res) => {
    const id_category = req.params.id_category

    conn.query('DELETE FROM category WHERE id_category = ?', id_category, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.delete('/company/:id_company', (req, res) => {
    const id_company = req.params.id_company

    conn.query('DELETE FROM company WHERE id_company = ?', id_company, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.delete('/job/:id_job', (req, res) => {
    const id_job = req.params.id_job

    conn.query('DELETE FROM job WHERE id_job = ?', id_job, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = app