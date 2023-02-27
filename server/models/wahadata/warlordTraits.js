const { Schema, model } = require("mongoose");

const warlordTraitsSechema = new Schema({
  faction_id: {
    type: String,
    required: true,
  },
  faction_name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  legend: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  column8: {},
  column9: {},
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
});

const WarlordTraits = model("StratgemPhase", warlordTraitsSechema);

module.exports = WarlordTraits;
