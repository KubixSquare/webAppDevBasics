const dotenv = require('dotenv');
dotenv.config();

dotenv.config({
  path: './config.env'
});

module.exports = {
  port : process.env.PORT || 4041,
  secret: process.env.SECRET,
};
