const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Datasheet {
        _id: ID!
        id: Int!
        name: String!
        link: String
        faction_id: String
        source_id: Int
        role: String
        unitComposition: String
        transport: String
        powerPoints: String
        priest: String
        openPlayOnly: String
        cost: String
        crusadeOnly: String
        virtual: String
        column17: String
        column18: String
        column19: String
        column20: String
        column21: String
    }
    type Query {
        datasheets: [Datasheet!]!
    }
`;

module.exports = typeDefs;