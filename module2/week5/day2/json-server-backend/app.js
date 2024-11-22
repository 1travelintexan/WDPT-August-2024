//this allows us to use the .env file for private information
require("dotenv").config();
//this creates a variable for the json-server
const jsonServer = require("json-server");
//this creates a variable named 'morgan' that is used later to make middlewares
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.OUR_PORT || 5005;

server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  // Middleware to disable CORS
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use(router);

//this actually starts and makes the server 'listen' for requests
server.listen(PORT, () => {
  console.log(`My server is running on port: ${PORT}`);
});
