const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DatasheetDamage {
    datasheet_id: Int!
    line: String
    col1: String
    col2: String
    col3: String
    col4: String
    col5: String
  }

  type Query {
    datasheetDamage: [DatasheetDamage!]!
  }
`;

module.exports = typeDefs;
