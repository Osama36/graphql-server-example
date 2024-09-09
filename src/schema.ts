export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        description: String!
        price: Float!
        platform: [String!]!
    }
    type Review{
        id: ID!
        description: String!
        rating: Int!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }
`

