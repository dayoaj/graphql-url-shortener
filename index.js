// import express from "express";
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const redirectURL = require("./controllers/url");

const PORT = process.env.PORT || 5000;

startApolloServer();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const app = express();

  app.get("/:shortUrl", redirectURL);

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: "/graphiql" });
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server is starting at ${process.env.BASE_URL}${server.graphqlPath}`
  );
  return { server, app };
}
