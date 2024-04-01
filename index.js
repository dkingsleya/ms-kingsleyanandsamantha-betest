const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_DB_URI;
const bodyParser = require("body-parser");
const { getData } = require("./services/getData");
const { addData } = require("./services/addData");
const { deleteData } = require("./services/deleteData");
const { updateData } = require("./services/updateData");
const { createUser } = require("./services/createUser");
const { assignToken } = require("./services/assignToken");
const { checkUser } = require("./services/checkUser");
const { verifyToken } = require("./services/verifyToken");
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const db = client.db(process.env.MONGO_DB_DB_NAME);
const col = db.collection(process.env.MONGO_DB_COLLECTION);
const col_user = db.collection(process.env.MONGO_DB_USER_COLLECTION);

app.use(bodyParser.json());

app.get("/get-data", async (req, res) => {
  try {
    const username = req.body.username;
    const account_number = req.body.account_number;
    const email_address = req.body.email_address;
    const identity_number = req.body.identity_number;
    const token = req.headers.authorization.split(" ")[1];

    await verifyToken(token).then(async (isValid) => {
      if (isValid.status == 200) {
        let result = await getData(
          client,
          col,
          username,
          account_number,
          email_address,
          identity_number
        );
        res.status(result.status).send(result);
      } else {
        res.status(isValid.status).send(isValid);
      }
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
});

app.put("/add-data", async (req, res) => {
  try {
    const username = req.body.username;
    const account_number = req.body.account_number;
    const email_address = req.body.email_address;
    const identity_number = req.body.identity_number;
    const token = req.headers.authorization.split(" ")[1];

    await verifyToken(token).then(async (isValid) => {
      if (isValid.status == 200) {
        let result = await addData(
          client,
          col,
          username,
          account_number,
          email_address,
          identity_number
        );

        res.status(result.status).send(result);
      } else {
        res.status(isValid.status).send(isValid);
      }
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
});

app.put("/update-data", async (req, res) => {
  try {
    const username = req.body.username;
    const account_number = req.body.account_number;
    const email_address = req.body.email_address;
    const identity_number = req.body.identity_number;
    const token = req.headers.authorization.split(" ")[1];

    await verifyToken(token).then(async (isValid) => {
      if (isValid.status == 200) {
        let result = await updateData(
          client,
          col,
          username,
          account_number,
          email_address,
          identity_number
        );

        res.status(result.status).send(result);
      } else {
        res.status(isValid.status).send(isValid);
      }
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
});

app.delete("/delete-data", async (req, res) => {
  try {
    const identity_number = req.body.identity_number;

    await verifyToken(token).then(async (isValid) => {
      if (isValid.status == 200) {
        let result = await deleteData(client, col, identity_number);

        res.status(result.status).send(result);
      } else {
        res.status(isValid.status).send(isValid);
      }
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
});

app.post("/signin", async (req, res) => {
  let { username, password } = req.body;
  let check = await checkUser(client, col_user, username, password);

  res.status(check.status).send(check);
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  await createUser(client, col_user, username, password).then(
    async (result) => {
      if (result.status != 200) {
        res.status(result.status).send(result);
      } else {
        await assignToken(result.details.userId, result.details.userName).then(
          (token) => {
            res.status(token.status).send(token);
          }
        );
      }
    }
  );
});

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
