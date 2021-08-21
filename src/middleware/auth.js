const { failed } = require('../helper/response');

const midAuth = (req, res, next) => {
  const { headers } = req;
  const { token } = headers;
  if (token === '123abc123abc123abcbca123') {
    next();
  } else {
    failed(res, 400, 'Token salah');
  }
};

module.exports = midAuth;
