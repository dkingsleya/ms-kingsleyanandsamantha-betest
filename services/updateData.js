async function updateData(
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

  try {
    await client.connect();

    const filter = { identityNumber: identity_number };
    const updateDocument = {
      $set: columns,
    };

    let result = await col.updateOne(filter, updateDocument);
    let msg = {};
    if (result.matchedCount == 0) {
      msg["status"] = 500;
      msg[
        "message"
      ] = `No Data is updated. Please make sure that identity_number ${identity_number} exists.`;
    } else {
      msg["status"] = 200;
      msg["message"] = "Data successfully updated.";
      msg["data"] = {
        user_name: username,
        account_number: account_number,
        email_address: email_address,
        identity_number: identity_number,
      };
      msg["details"] = result;
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

module.exports = { updateData };
