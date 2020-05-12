require('dotenv').config();
const {oktaJwtVerifier, client} = require('./auth/auth');
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
  context: ({req}) => {
    const accessToken = req.headers.authorization || "";
    //adding a change
    const user = client.getUser(idToken)
    .then (user => {
      console.log(user);
    });
    const verifyUser =  oktaJwtVerifier(user)

    return {user};
  }
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});