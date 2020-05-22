const dotenv = require('dotenv');
dotenv.config();

dotenv.config({
  path: './config.env'
});

module.exports = {
  port : process.env.PORT || 8081,
  secret: process.env.SECRET,
};
