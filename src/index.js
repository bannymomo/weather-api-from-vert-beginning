require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const notFoundhandler = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const helmet = require("helmet");
const morgan = require("morgan");

app.use(helmet());
app.use(morgan());
app.use(cors());
app.use(express.json());
app.use("", routes);
app.use(errorHandler);
app.use(notFoundhandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
