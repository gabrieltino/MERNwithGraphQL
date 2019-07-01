const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Allow Cross Origin Requests
app.use(cors());

//Connect to database
mongoose.connect(
  "mongodb://iamtino:1smartcoded@ds345597.mlab.com:45597/graphqlmern",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server up and running on port 4000...");
});
