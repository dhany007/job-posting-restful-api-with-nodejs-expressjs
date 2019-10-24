const companyModels = require('../models/company')

module.exports = {
    getCompany: (req, res) => {
        companyModels.getCompany()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })        
    },
    addCompany: (req, res) => {
        const { name_company, logo, description_company } = req.body
        
        const data = {
            name_company, 
            logo, 
            description_company }

        companyModels.addCompany(data)
        
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
    updateCompany: (req, res) => {
        const id_company = req.params.id_company
        const data = req.body

        companyModels.updateCompany(data, id_company)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
    deleteCompany: (req, res) => {
        const id_company = req.params.id_company
        
        companyModels.deleteCompany(id_company)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    }
}