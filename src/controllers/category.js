const categoryModels = require('../models/category')

module.exports = {
    getCategory: (req, res) => {
        categoryModels.getCategory()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })        
    }
}