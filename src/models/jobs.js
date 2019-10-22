const conn = require('../configs/db')

module.exports = {
    getJobs: (sortBy, searchNameJob, searchNameCompany) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT x.id_job, x.name_job, x.description_job, y.name_category, \
            x.salary, x.location_job, z.name_company, x.date_add, x.date_update \
            FROM job x \
            JOIN category y ON x.category = y.id_category \
            JOIN company z ON x.company = z.id_company \
            WHERE x.name_job LIKE '${searchNameJob}' and z.name_company LIKE '${searchNameCompany}' \
            ORDER BY ${sortBy}`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })    
        })
    },
    addJob: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO job SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    },
    updateJob: (data, id_job) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE job SET ? where id_job = ?', [data, id_job], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    },
    deleteJob: (id_job) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM job WHERE id_job = ?', id_job, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    }
}