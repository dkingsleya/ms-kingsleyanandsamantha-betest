const { generateTimeBasedUUID } = require("../tools/generateUID");

async function addData(
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
    await client.connect();

    await col.createIndex({ userName: 1, identityNumber: 1 }, { unique: true });

    let result = await col.insertOne({
      _id: generateTimeBasedUUID(),
      userName: username ? username : null,
      accountNumber: account_number ? account_number : null,
      emailAddress: email_address ? email_address : null,
      identityNumber: identity_number ? identity_number : null,
    });

    return {
      status: 201,
      message: "Data successfully inserted",
      data: {
        user_name: username,
        account_number: account_number,
        email_address: email_address,
        identity_number: identity_number,
      },
      details: result,
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

module.exports = { addData };
