const jwt = require('jsonwebtoken');

const secret = '45432THISISASECRET987345!!';
const expiration = '1h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, _id, age, weight, height }) {
    const payload = { username, _id, age, weight, height };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};