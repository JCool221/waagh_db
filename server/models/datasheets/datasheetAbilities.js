const { Schema, model } = require('mongoose');

const dataseetAbilitiesSchema = new Schema({
    datasheet_id: {
        type: Number,
        required: true,
    },
    line: {
        type: Number,
        required: true,
    },
    ability_id: {
        type: Number,
        required: true,
    },
    is_index_wargear: {
        type: String,
    },
    cost: {
        type: Number,
        required: true,
    },
    is_other_wargear: {
        type: String,
    },
    model: {},
});

const DatasheetAbilities = model('DatasheetAbilities', dataseetAbilitiesSchema, 'datasheetabilities');

module.exports = DatasheetAbilities