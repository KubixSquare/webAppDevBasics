const express = require('express')
const server = express()
const body_parser = require('body-parser')

const { port } = require('./config/common/config');

const app = require('./app');

server.use(body_parser.json())

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
