const { Schema, model } = require("mongoose");

const wargearSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  source_id: {
    type: String,
  },
  legend: {
    type: String,
  },
  is_relic: {
    type: String,
  },
  id: {
    type: Number,
  },
  faction_id: {
    type: String,
  },
  faction_name: {
    type: String,
  },
  description: {
    type: String,
  },
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
});

const Wargear = model("Wargear", wargearSchema, 'wargear');

module.exports = Wargear;
