const { Schema, model } = require('mongoose');

const datasheetKeywordsSchema = new Schema({
    datasheet_id: {
        type: Number,
        required: true,
    },
    is_faction_keyword: {
        type: Boolean,
        required: true,
    },
    keyword: {
        type: String,
        required: true,
    },
    model: {},
});

const DatasheetKeywords = model('DatasheetKeywords', datasheetKeywordsSchema);

module.exports = DatasheetKeywords