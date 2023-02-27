const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type DatasheetStratagems {
        datasheet_id: Int!
        stratagem_id: Int!
    }
    type Query {
        DatasheetStratagems: [DatasheetStratagems!]!
    }
`;

module.exports = typeDefs;