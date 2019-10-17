'use strict';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const router = express.Router();
const hbs = require('hbs');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const policiesRouter = require('./routes/policies');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
require('dotenv').config({ path: '.env' });
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch(error => {
    console.error(error);
  });

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: process.env.SECRET_SESSION, // encripting session
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // only http has access to the object cookie
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', auth);
app.use('/users',usersRouter);
app.use('/policies', policiesRouter);
// -- 404 and error handler

app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    const statusError = err.status || '500';
    res.status(statusError).json(err);
  }
});

module.exports = app;
