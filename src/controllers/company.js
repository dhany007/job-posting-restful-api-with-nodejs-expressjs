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
    }
}