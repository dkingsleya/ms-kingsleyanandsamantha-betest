const jwt = require("jsonwebtoken");

async function assignToken(userid, username) {
  try {
    token = jwt.sign(
      {
        userId: userid,
        userName: username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      status: 201,
      data: { userId: userid, userName: username, token: token },
    };
  } catch (err) {
    return {
      status: 500,
      data: err.message,
    };
  }
}

module.exports = { assignToken };
