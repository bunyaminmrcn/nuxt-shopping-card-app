const express = require("express")
const { json, urlencoded } = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const path = require('path')
const cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

require('dotenv').config({
  path: path.join(__dirname, '.env')
});
const routes = require('./routes');

const app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV == 'production', maxAge: 6 * 60 * 60 * 1000 }
}))

app.use(cookieParser());
app.use('/', routes);

app.listen(4000, async () => {
  console.log('Server running on')
})

module.exports = app