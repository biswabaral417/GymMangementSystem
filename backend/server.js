const dotenv = require('dotenv')
dotenv.config({ path: "./backend/config.env" });

const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors({
  origin: 'https://localhost:3000',
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

const fs = require("fs");
const https = require("https");
// const http=require("http")
const httpsOptions = {
  key: fs.readFileSync("./certs/sslCert/localhost.decrypted.key"),
  cert: fs.readFileSync("./certs/sslCert/localhost.crt"),
};

const server = https.createServer(httpsOptions, app);
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

require("./db/conn"); // adding db connection


// the /^\/(?!api).*/ is regex  used in app.get is telling server to let html page handle all routes internally within react app if /* is not equal to /api
app.get(/^\/(?!api).*/, function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const userRoutes = require('./router/userRoutes')
const adminRoutes=require('./router/adminRoutes');

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (HTTPS)`);
});
