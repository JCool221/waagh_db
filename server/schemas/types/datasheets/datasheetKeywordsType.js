const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DatasheetKeywords {
    datasheet_id: Int!
    is_faction_keyword: Boolean!
    keyword: String!
    model: String
  }

  type Query {
    datasheetKeywords: [DatasheetKeywords!]!
  }
`;

module.exports = typeDefs;
