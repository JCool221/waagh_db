const { Schema, model } = require('mongoose');

const datasheetOptionsSchema = new Schema({
    datasheet_id: {
        type: Number,
        required: true,
    },
    line: {
        type: Number,
        required: true,
    },
    button: {
        type: String,
    },
    description: {
        type: String,
    },
    is_index_wargear: {
        type: String,
    },
    column7:{},
    column8:{},
    column9:{},
});

const DatasheetOptions = model('DatasheetOptions', datasheetOptionsSchema);

module.exports = DatasheetOptions;