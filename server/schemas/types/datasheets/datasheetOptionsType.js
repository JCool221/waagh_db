const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type DatasheetOptions {
        _id: ID!
        datasheet_id: Int!
        line: Int!
        button: String
        description: String
        is_index_wargear: String
        column7: String
        column8: String
        column9: String
}
type Query {
    datasheetOptions: [DatasheetOptions!]!
}
`;

module.exports = typeDefs;
