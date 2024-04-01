async function deleteData(client, col, identity_number) {
  try {
    await client.connect();

    let result = await col.findOneAndDelete({
      identityNumber: identity_number,
    });

    if (result == null) {
      return {
        status: 500,
        message: "Data not found, nothing is deleted",
      };
    } else {
      return {
        status: 200,
        message: "Data successfully deleted",
        data: result,
      };
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

module.exports = { deleteData };
