const { Schema, model } = require("mongoose");

const stratagemPhaseSechema = new Schema({
  phase: {
    type: String,
    required: true,
  },
  stratagem_id: {
    type: Number,
    required: true,
  },
});

const StratagemPhase = model("StratgemPhase", stratagemPhaseSechema);

module.exports = StratagemPhase;
