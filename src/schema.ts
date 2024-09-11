export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        description: String!
        price: Float!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        id: ID!
        description: String!
        rating: Int!
        author: Author
        game: Game
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews (verified: Boolean): [Review]
        review(id: ID!): Review,
        authors: [Author]
        author(id: ID!): Author
    }
`

