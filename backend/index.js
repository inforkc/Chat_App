const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const port = 4500 || process.env.PORT;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("App is running ");
})

const server = http.createServer(app);

const io = socketIO(server);
io.on("connection", () => {
    console.log("New connection");
})


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});