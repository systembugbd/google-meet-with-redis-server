/* eslint-disable import/order */
/* eslint-disable linebreak-style */
require('dotenv').config();
const express = require('express');
 
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Routes = require('./app/routes');

const PORT = process.env.PORT || 5000;
const app = express();

const server = http.createServer(app);
 

app.use([

  cors(),
  morgan('dev'),
  express.json(),
  express.urlencoded({ extended: false }),
  Routes,

]);

app.get('/', (req, res, next) => {
  res.send('<h3>Hello Shaheb! </h3>');
});

const io = require('socket.io')(server);
const socketManager = require('./app/socketManager');

io.on('connection', socketManager);

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
