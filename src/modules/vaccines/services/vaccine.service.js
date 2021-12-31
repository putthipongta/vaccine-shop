const StatusEnum = require('../../../common/status.enum')
const VaccineDocument = require('../models/vaccine.schema')

const VaccineService = {
    create(payload) {
        return new VaccineDocument(payload).save()
    },
    getAll(query) {
        return VaccineDocument.find({ ...query, status: StatusEnum.ACTIVE })
    },
    getOneById(id) {
        return VaccineDocument.findOne({ _id: id })
    }
}

module.exports = VaccineService