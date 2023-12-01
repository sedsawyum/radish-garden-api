import http from "node:http";
import { config } from "dotenv";
import connectDB from "./src/db/connectDB";
import app from "./src/app";

config();
const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  connectDB(`${process.env.MONGO_URI}`);
  console.log(`Server is listening on port ${PORT}`);
});
