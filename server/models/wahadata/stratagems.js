const { Schema, model } = require("mongoose");

const stratagemSechema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  faction_id: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  cp_cost: {
    type: String,
    required: true,
  },
  legend: {
    type: String,
  },
  source_id: {
    type: String,
  },
  subfaction_id: {
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
});

const Stratagem = model("StratgemPhase", stratagemSechema);

module.exports = Stratagem;
