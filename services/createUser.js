const { generateTimeBasedUUID } = require("../generateUID");
const bcrypt = require("bcrypt");

async function createUser(client, col, username, password) {
  if (!username || !password) {
    return {
      status: 500,
      message: "Username and password is required.",
    };
  }

  try {
    let id = generateTimeBasedUUID();
    await client.connect();

    await col.createIndex({ userName: 1 }, { unique: true });

    await col.insertOne({
      _id: id,
      userName: username,
      password: await bcrypt.hash(password, 8),
    });

    return {
      status: 200,
      message: `User ${username} successfully created`,
      details: {
        userName: username,
        userId: id,
      },
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = { createUser };
