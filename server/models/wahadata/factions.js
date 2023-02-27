const { Schema, model } = require("mongoose");

const factionSchema = new Schema ({
    id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    is_subfaction:{
        type:Boolean,
        required: true
    },
    parent_id: {
        type: String,
    },
});

const Factions = model("Factions", factionSchema);

module.exports = Factions;