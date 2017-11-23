
const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const users = require('./schema')
const app = express()
app.use('/user', graphqlHTTP({schema:Clients, pretty: true}))
app.listen(10000, function () {
  console.log('Servidor online.')
})
