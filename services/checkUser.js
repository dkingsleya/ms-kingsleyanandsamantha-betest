const bcrypt = require("bcrypt");
const { assignToken } = require("./assignToken");

async function checkUser(client, col, username, password) {
  try {
    await client.connect();
    let user = await col.findOne({ userName: username });
    let check = await bcrypt.compare(password, user.password);

    if (user && check) {
      let data = await assignToken(user._id, user.userName);
      return data;
    } else {
      return {
        status: 500,
        data: "Wrong password/ User doesn't exist.",
      };
    }
  } catch (e) {
    return {
      status: 500,
      data: e.message,
    };
  } finally {
    await client.close();
  }
}

module.exports = { checkUser };
