const express = require('express')
const vaccineController = require('./controllers/vaccine.controller')
const router = express.Router()

router.get('/test', vaccineController.test)
router.get('/', vaccineController.getVaccines)
router.get('/:id', vaccineController.getVaccineById)
router.post('/', vaccineController.createVaccine)


module.exports = router