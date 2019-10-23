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
    },
    addCategory: (req, res) => {
        const data = req.body

        categoryModels.addCategory(data)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    updateCategory: (req, res) => {
        const id_category = req.params.id_category
        const data = req.body

        categoryModels.updateCategory(data, id_category)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteCategory: (req, res) => {
        const id_category = req.params.id_category
        
        categoryModels.deleteCategory(id_category)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}