const { gql } = require("apollo-server-express");
const datasheetType = require("./types/datasheets/datasheetType");
const datasheetAbilitiesType = require("./types/datasheets/datasheetAbilitiesType");
const datasheetDamagesType = require("./types/datasheets/datasheetDamagesType");
const datasheetKeywordstype = require("./types/datasheets/datasheetKeywordsType");
const datasheetModelsType = require("./types/datasheets/datasheetModelsType");
const datasheetOptionsType = require("./types/datasheets/datasheetOptionsType");
const DatasheetStratagemsType = require("./types/datasheets/datasheetStratagemsType");
const datsheetWargearType = require("./types/datasheets/datasheetWargearType");

const typeDefs = gql`
  ${datasheetType}
  ${datasheetAbilitiesType}
  ${datasheetDamagesType}
  ${datasheetKeywordstype}
  ${datasheetModelsType}
  ${datasheetOptionsType}
  ${DatasheetStratagemsType}
  ${datsheetWargearType}
`;

module.exports = typeDefs;
