const { Schema, model } = require('mongoose');

const datasheetStratagemSchema = new Schema({
    datasheet_id: {
        type: Number,
        required: true,
    },
    stratagem_id: {
        type: Number,
        required: true,
    },
});

const DatasheetStratagems = model('DatasheetStratagems', datasheetStratagemSchema);

module.exports = DatasheetStratagems