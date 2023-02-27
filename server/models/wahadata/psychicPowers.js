const { Schema, model } = require("mongoose");

const psychicPowerSchema = new Schema({
  roll: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  faction_id: {
    type: String,
  },
  faction_name: {
    type: String,
  },
  legend: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: String,
  },
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

const PsychicPowers = model('PsychicPowers', psychicPowerSchema);

module.exports = PsychicPowers