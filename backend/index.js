const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const port = 4500 || process.env.PORT;

const app = express();
const server = http.createServer();
const io = socketIO();

server.listen(port, () => {
    console.log(`server is working on ${port}`);
});