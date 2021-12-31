const { Schema, model } = require('mongoose')
const StatusEnum = require('../../../common/status.enum')

const VaccineSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    quality: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: StatusEnum.ACTIVE
    }
}, { timestamps: true, strict: true })

const VaccineModel = model('vaccines', VaccineSchema)
module.exports = VaccineModel