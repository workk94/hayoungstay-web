const jwt = require("jsonwebtoken");
require('dotenv').config();

const jwtsecret = process.env.JWT_SECRET;

const jwtMiddleware = function (req, res, next) {
  // read the token from header or url
  const token = req.headers["x-access-token"] || req.query.token;
  // token does not exist
  if (!token) {
    return res.status(403).json({
      isSuccess: false,
      code: 403,
      message: "로그인이 되어 있지 않습니다.",
    });
  }

  try {
    const verifiedToken = jwt.verify(token, jwtsecret);
    req.verifiedToken = verifiedToken;
    next();
  } catch {
    res.status(403).json({
      isSuccess: false,
      code: 403, // 403 Forbidden
      message: "검증 실패",
    });
  }
};

module.exports = jwtMiddleware;
