const { Schema, model } = require("mongoose");

const sourceSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  edition: {
    type: Number,
  },
  version: {
    type: String,
  },
  errata_date: {
    type: String,
  },
  errata_link: {
    type: String,
  },
  column8: {},
});

const Source = model( "Source", sourceSchema );

module.exports = Source;
