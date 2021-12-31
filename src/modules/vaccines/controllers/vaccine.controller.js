const humps = require('humps')
const VaccineService = require('../services/vaccine.service')

const vaccineController = {
    test(req, res) {
        
        res.json({
            success: true,
            data: 'It\'s worked'
        }).status(200)
    },
    async getVaccines(req, res) {
        const { quantity, quality } = humps.camelizeKeys(req.query)
        const query = {
            quality: quality || { $ne: null },
            quantity: quantity || { $ne: null }
        }
        const found = await VaccineService.getAll(query)
        res.json({
            success: true,
            data: found
        }).status(200)
    },
    async getVaccineById(req, res) {
        const { id } = req.params
        const found = await VaccineService.getOneById(id)
        res.json({
            success: true,
            data: found
        }).status(200)
    },
    async createVaccine(req, res) {
        const { name, quantity, quality } = req.body
        const created = await VaccineService.create({ name, quantity, quality })
        res.json({
            success: true,
            data: created
        }).status(201)
    }
}

module.exports = vaccineController