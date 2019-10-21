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
    },
    addJob: (req, res) => {
        const { name_job, description_job, category, salary, location_job, company } = req.body
        const data = { 
            name_job, 
            description_job, 
            category, 
            salary, 
            location_job, 
            company,
            date_add:  new Date(),
            date_update: new Date()
        }
        jobModels.addJob(data)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    updateJob: (req, res) => {
        const id_job = req.params.id_job
        const data = req.body

        jobModels.updateJob(data, id_job)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }, 
    deleteJob: (req, res) => {
        const id_job = req.params.id_job

        jobModels.deleteJob(id_job)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}