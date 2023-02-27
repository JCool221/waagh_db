const { Schema, model } = require("mongoose");

const secondariesSchema = new Schema({
  game: {
    type: String,
    required: true,
  },
  category: {
    type: String,
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
  legend: {
    type: String,
  },
  description: {
    type: String,
  },
  faction_type: {
    type: String,
  },
  faction_name: {
    type: String,
  },
  faction_id: {
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
  column25: {},
  column26: {},
  column27: {},
  column28: {},
  column29: {},
  column30: {},
  column31: {},
  column32: {},
  column33: {},
});

const Secondaries = model("Secondaries", secondariesSchema);

module.exports = Secondaries;
