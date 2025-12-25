const {Brand} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await brand.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()