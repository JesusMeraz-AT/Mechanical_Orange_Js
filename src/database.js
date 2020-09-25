const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = `mongodb+srv://daniero:shikatema100@cluster0.x7kcp.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));