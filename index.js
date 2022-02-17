require("dotenv").config();
const cors = require('cors');
const express = require('express');
const mongoose = require("mongoose");

const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 5000;

app.set("port", port);
app.use(cors());

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to open event (to get notification of connection)
db.once("open", () => {
  console.log("MongoDB is connected");
  server.listen(port, () => {
    console.log("server is running at", port);
  });
  
  // insert data to Db
  const titlesData = require("./utils/titlesData");
  // titlesData.insertTitles(); // call to insert data
});

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const titlesRoute = require("./routes/titles");

app.use("/titles", titlesRoute);