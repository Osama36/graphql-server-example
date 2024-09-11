import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(root, args) {
      return db.games.find(game => game.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(root, args) {
      return db.authors.find(author => author.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(root, args) {
      return db.reviews.find(review => review.id === args.id)
    }

  },
  Game: {
    reviews(game) {
      return db.reviews.filter(review => review.game_id === game.id)
    },

  },
  Author: {
    reviews(author, args) {

      return db.reviews.filter(review => review.author_id === author.id)


    },
  },
  Review: {
    author(review) {
      return db.authors.find(author => author.id === review.author_id)
    },
    game(review) {
      return db.games.find(game => game.id === review.game_id)
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})


const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000
  }
})
