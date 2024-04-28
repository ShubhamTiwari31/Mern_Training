const express = require("express");
const mongoose = require('mongoose');
const productRouter = require("./routes/productsRoutes.js");
const app = express();
const test = require('./models/productsModel.js')

app.use(express.json());
app.use("/api/products", productRouter);

const url =
  "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.dpvsp3i.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const databaseUser = "shubh";
const databasePassword = "2_7aGwMYvBEydFv";
const databaseName = "Amazon-backend";

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose
  .connect(dbLink)
  .then(() =>
    console.log("------------------ Database Connected -----------------")
  );

app.listen(1400, () =>
  console.log("------------- APP STARTED ----------------")
);

