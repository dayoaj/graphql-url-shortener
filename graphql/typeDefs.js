const { gql } = require("apollo-server-express");

// export default typeDef = () => gql`
const typeDefs = gql`
  type ShortUrl {
    id: ID!
    shortUrl: String!
    createdAt: String!
    expiredAt: String
    fullUrl: String!
  }
  type Query {
    dummy: String
  }
  type Mutation {
    shortenUrl(url: String!): ShortUrl!
  }
`;

module.exports = typeDefs;
