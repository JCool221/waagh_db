const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DatasheetModels {
    datasheet_id: Int!
    line: Int!
    name: String!
    M: String
    WS: String
    BS: String
    S: Int
    T: Int
    W: Int
    A: Int
    Ld: Int
    Sv: String
    Cost: Int
    models_per_unit: String
    cost_including_wargear: Boolean!
    base_size: String
    base_size_descr: String
    cost_description: String
    column19: String
    column20: String
  }

  type Query {
    datasheetModels: [DatasheetModels!]!
  }
`;

module.exports = typeDefs;
