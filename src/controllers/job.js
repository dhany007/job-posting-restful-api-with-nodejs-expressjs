const jobModels = require('../models/jobs')

module.exports = {
    getJobs: (req, res) => {
        jobModels.getJobs()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })        
    }
}