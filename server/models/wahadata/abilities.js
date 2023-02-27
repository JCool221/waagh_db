const { Schema, model } = require('mongoose');

const abilitySchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    legend: {
        type: String,
    },
    is_other_wargear: {
        type: String,
    },
    faction_id: {
        type: String,
    },
    description: {
        type: String,
        required: true,

    },
column8: {},
column9: {},
column10: {},
column11: {},
column12: {},
column13: {}, 
column14: {},
column15: {},
column16: {},
column17: {},
column18: {},
column19: {},
column20: {},
column21: {},
column22: {},
column23: {},
column24: {},
column25: {},
column26: {},
column27: {},
column28: {},
column29: {},
column30: {},
column31: {},
column32: {},
column33: {},
column34: {},
column35: {},
column36: {},
column37: {},
column38: {},
column39: {},
column40: {},
column41: {},
column42: {},
column43: {},
column44: {},
column45: {},
column46: {},
column47: {},
column48: {},
column49: {},
column50: {},
column51: {},
column52: {},
column53: {},
column54: {},
column55: {},
column56: {},
});

const Abilities = model('Abilities', abilitySchema, 'abilities');

module.exports = Abilities