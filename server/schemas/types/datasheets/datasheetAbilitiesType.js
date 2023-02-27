const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DatasheetAbility {
    datasheet_id: Int!
    line: Int!
    ability_id: Int!
    is_index_wargear: String
    cost: Int!
    is_other_wargear: String
    model: String
  }

  type Query {
    datasheetAbilities: [DatasheetAbility!]!
  }
`;

module.exports = typeDefs;
