const { Schema, model } = require("mongoose");

const datasheetSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  faction_id: {},
  source_id: {
    type: Number,
  },
  role: {
    type: String,
  },
  unitComposition: {},
  transport: {},
  powerPoints: {},
  priest: {},
  openPlayOnly: {},
  cost: {},
  crusadeOnly: {},
  virtual: {},
  column17: {},
  column18: {},
  column19: {},
  column20: {},
  column21: {},
});

const Datasheet = model("Datasheet", datasheetSchema);

module.exports = Datasheet;
