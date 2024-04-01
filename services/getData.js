const { createClient } = require("redis");

async function getData(
  client,
  col,
  username,
  account_number,
  email_address,
  identity_number
) {
  let columns = {};
  if (username) columns["userName"] = username;
  if (account_number) columns["accountNumber"] = account_number;
  if (email_address) columns["emailAddress"] = email_address;
  if (identity_number) columns["identityNumber"] = identity_number;

  try {
    const redis = createClient();
    await client.connect();
    await redis.connect();
    let options = columns;

    redis.on("error", (err) => console.log("Redis Client Error", err));

    let cache = await redis.get("data");
    if (cache != null) {
      return {
        status: 200,
        message: "Data successfully retrieved with Redis",
        data: JSON.parse(cache),
      };
    } else {
      let result = await col.findOne(options);
      await redis.SETEX("data", 3600, JSON.stringify(result));
      if (result) {
        return {
          status: 200,
          message: "Data successfully retrieved",
          data: result,
        };
      } else {
        return {
          status: 500,
          message: "No data found.",
        };
      }
    }
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

module.exports = { getData };
