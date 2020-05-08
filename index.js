require('dotenv').config()
const cors = require("cors")
const express = require("express")
const { ApolloServer } = require ('apollo-server-express');

const {schema}= require('./apollo/schema/index')
const {resolvers} =require('./apollo/resolvers/index')
const { users } =require('./apollo/models/index')


const app = express();

app.use(cors());


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1],
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});