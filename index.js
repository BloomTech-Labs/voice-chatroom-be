const cors = require("cors")
const express = require("express")
const { ApolloServer, gql } = require ('apollo-server-express');

const app = express();

// app.use(cors());

const schema = gql`
    type Query{
        me: User
    }

    type User {
        username: String
    }
    `;

// Resolvers are used to return data for fields from a schema
const resolvers = {
    Query: {
        me: () =>{
            return{
                username: 'Test User',
            };
        },
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

// Using applymiddleware feature allows us to opt in any middleware.
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () =>{
    console.log('Apollo Server on http://localhost:8000/graphql')
})