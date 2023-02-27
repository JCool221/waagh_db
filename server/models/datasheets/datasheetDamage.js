const { Schema, model } = require('mongoose');

const datasheetDamageSchema = new Schema ({
    datasheet_id: {
        type: Number,
        required: true,
    },
    line: {},
    col1: {},
    col2: {},
    col3: {},
    col4: {},
    col5: {},
});

const DatasheetDamage = model('DatasheetDamage', datasheetDamageSchema, 'datasheetdamage');
module.exports = DatasheetDamage