const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DatasheetWargear {
    datasheet_id: Int!
    line: Int!
    ability_id: Int!
    cost: Int
    is_index_wargear: Boolean!
    is_upgrade: Boolean!
    model: String
  }

  type Query {
    datasheetWargear: [DatasheetWargear!]!
  }
`;

module.exports = typeDefs;
