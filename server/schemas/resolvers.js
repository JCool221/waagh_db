const { 
  Datasheet, 
  DatasheetOptions,
  DatasheetAbilities,
  DatasheetKeywords, 
  DatasheetDamage,
  DatasheetModels,
  DatasheetStratagems,
  DatasheetWargear
} = require("../models/datasheets");

const resolvers = {
  Query: {
    datasheets: async () => {
      try {
        const datasheets = await Datasheet.find();
        return datasheets;
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    },
    datasheetOptions: async () => {
      try {
        const datasheetOptions = await DatasheetOptions.find();
        return datasheetOptions;
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    },
    datasheetAbilities: async () => {
      try {
        const datasheetAbilities = await DatasheetAbilities.find();
        return datasheetAbilities;
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    },
    datasheetDamage: async () => {
      try{
        const datasheetDamage = await DatasheetDamage.find();
        return datasheetDamage;
      } catch(err) {
        throw new Error(`Error: ${err}`)
      }
    },
    datasheetKeywords: async () => {
      try {
        const datasheetKeywords = await DatasheetKeywords.find();
        return datasheetKeywords;
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    },
    datasheetModels: async () => {
      try {
        const datasheetModels = await DatasheetModels.find();
        return datasheetModels;
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    },
    datasheetWargear: async () => {
      try {
        const datasheetWargear = await DatasheetWargear.find();
        return datasheetWargear;
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    },
    // datasheetStratagems: async () => {
    //   try {
    //     const datasheetStratagems = await DatasheetStratagems.find();
    //     return datasheetStratagems;
    //   } catch (err) {
    //     throw new Error(`Error: ${err}`);
    //   }
    // }


  }
};

module.exports = resolvers;
