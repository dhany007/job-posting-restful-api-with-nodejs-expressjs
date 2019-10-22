const jobModels = require('../models/jobs')

module.exports = {
    getJobs: (req, res) => {
        let { sortName, sortCompany, date_update, searchNameJob, searchNameCompany, page, eachPage } = req.query
        let sortBy = 'x.name_job ASC'
        
        if (sortName != undefined && sortCompany == undefined && date_update == undefined ) {
            sortBy = 'x.name_job DESC'
        }
        if (sortName == undefined && sortCompany != undefined && date_update == undefined ) {
            sortBy = 'z.company_name DESC'
        }
        if (sortName == undefined && sortCompany == undefined && date_update != undefined ) {
            sortBy = 'x.date_update DESC'
        }
        if (searchNameJob == undefined) {
            searchNameJob = '%%'
        } else {
            searchNameJob = '%' + searchNameJob + '%'
        }
        if (searchNameCompany == undefined) {
            searchNameCompany = '%%'
        } else {
            searchNameCompany = '%' + searchNameCompany + '%'
        }    
        
        if (page == undefined){
            page = 1
        }
        if (eachPage == undefined){
            eachPage = 3
        }

        let limitStart = (parseInt(page)-1)*parseInt(eachPage)
        
        jobModels.getJobs(sortBy, searchNameJob, searchNameCompany, limitStart, eachPage)
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
        let date_update = new Date().toLocaleString()
        data.date_update = date_update

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