const midAuth = (req, res, next) => {
  const { headers } = req;
  const { token } = headers;
  if (token === '123abc123abc123abcbca123') {
    next();
  } else {
    res.json({
      msg: 'token salah',
    });
  }
};

module.exports = midAuth;
