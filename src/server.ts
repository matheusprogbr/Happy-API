import express from "express";
import routes from "./routes";
const server = express();

import "./database/connection";

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log("Server is running!");
});
