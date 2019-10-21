const conn = require('../configs/db')

module.exports = {
    getJobs: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT x.name_job, x.description_job, y.name_category, \
            x.salary, x.location_job, z.name_company, x.date_add, x.date_update \
            FROM job x \
            JOIN category y ON x.category = y.id_category \
            JOIN company z ON x.company = z.id_company`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })    
        })
    }
}