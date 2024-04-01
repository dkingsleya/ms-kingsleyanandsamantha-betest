const jwt = require("jsonwebtoken");

async function verifyToken(token) {
  try {
    if (!token) {
      return {
        status: 500,
        message: "Please provide a bearer token.",
      };
    } else {
      let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      return {
        status: 200,
        data: decodedToken,
      };
    }
  } catch (e) {
    return {
      status: 500,
      data: e.message,
    };
  }
}

module.exports = { verifyToken };
