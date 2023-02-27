const { Schema, model } = require('mongoose');

const dataseetwargearSchema = new Schema({
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
    cost: {
        type: Number,
    },
    is_index_wargear: {
        type: Boolean,
        required: true,
    },
    is_upgrade: {
        type: Boolean,
        required: true,
    },
    model: {},
});

const DatasheetWargear = model('DatasheetWargear', dataseetwargearSchema, 'datasheetwargear');

module.exports = DatasheetWargear