const { Schema, model } = require('mongoose');

const datasheetModelSchema = new Schema({
    datasheet_id: {
        type: Number,
        required: true,
    },
    line: {
        type: Number,
        required: true,
    },
    name:  {
        type: String,
        required: true,
    },
    M: {
        type: String,
        required: true,
    },
    WS: {
        type: String,
        required: true,
    },
    BS: {
        type: String,
        required: true,
    },
    S: {
        type: Number,
        required: true,
    },
    T: {
        type: Number,
        required: true,
    },
    W: {
        type: Number,
        required: true,
    },
    A: {
        type: Number,
        required: true,
    },
    Ld: {
        type: Number,
        required: true,
    },
    Sv: {
        type: String,
        required: true,
    },
    Cost: {
        type: Number,
    },
    models_per_unit: {
        type: String,
    },
    cost_including_wargear: {
        type: Boolean,
        required: true,
    },
    base_size: {
        type: String,
    },
    base_size_descr: {},
    cost_description: {},
    column19: {},
    column20: {},
});

const DatasheetModels = model('DatasheetModels', datasheetModelSchema);
    
module.exports = DatasheetModels;