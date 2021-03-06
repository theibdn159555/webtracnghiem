const express = require("express");
const http = require("http");
const mysql = require("mysql2");
const path = require("path");
const socketio = require("socket.io");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require("./router");
const { fetchInfo } = require("./function/fetchInfo");
const { createRoom } = require("./function/createRoom");
const { joinRoom, leaveRoom } = require("./function/joinRoom");
const { startExam } = require("./function/startExam");
const { saveMember } = require("./function/saveMember");
const { showRank } = require("./function/showRank");
const { updateRank } = require("./function/updateRank");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(cors());
app.use(cookieParser());
app.use(router);

server.listen(4000, () => {
  console.log(`http://localhost:4000/website-trac-nghiem/`);
});

io.on("connection", (socket) => {
  console.log("socketio started");

  socket.on("fetch-info", (data) => fetchInfo(socket, data));
  socket.on("create-room", (data) => createRoom(socket, data));
  socket.on("join-room", (data) => joinRoom(io, socket, data));
  socket.on("all-member-start", (data) => startExam(io, socket, data));
  socket.on("save-member", (data) => saveMember(io, socket, data));
  socket.on("show-rank", (data) => showRank(io, socket, data));
  socket.on("update-rank", (data) => updateRank(io, socket, data));
  socket.on("disconnect", () => leaveRoom(io, socket));
});
