import app from "./app";
require('dotenv').config({ path: __dirname+'/.env' });
import http from "http";

var httpServer = http.createServer(app);

const httpPort = process.env.HTTP_PORT || 4000;

httpServer.listen(httpPort, ()=> {console.log('http on '+httpPort)});
