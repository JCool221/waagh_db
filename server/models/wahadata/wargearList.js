const { Schema, model } = require("mongoose");

const wargearListSechema = new Schema({
  wargear_id: {
    type: Number,
    required: true,
  },
  line: {
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
  range: {
    type: String,
    required: true,
  },
  s: {
    type: String,
    required: true,
  },
  d: {
    type: String,
    required: true,
  },
  column10: {},
  column11: {},
  column12: {},
  column13: {},
  column14: {},
  column15: {},
  column16: {},
});

const WargearList = model("WargearList", wargearListSechema, 'wargearlist');

module.exports = WargearList;
