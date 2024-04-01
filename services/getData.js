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
    await client.connect();
    let options = columns;
    let result = await col.findOne(options);

    let msg = {};
    if (result) {
      msg["status"] = 200;
      msg["message"] = "Data successfully retrieved";
      msg["data"] = result;
    } else {
      msg["status"] = 500;
      msg["message"] = "No data found.";
    }

    return msg;
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
