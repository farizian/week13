require('dotenv').config();

const env = {
  db_username: process.env.db_username,
  db_password: process.env.db_password,
  token: process.env.token,
};

module.exports = env;
