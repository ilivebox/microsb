import * as morgan from 'morgan';
import * as cors from 'cors';
import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as errorHandler from 'errorhandler';
import * as session from 'express-session';

import { join } from 'path';
import { root } from './index';
import { SESSION_SECRET } from './passport';

import * as passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// const RedisStore = require('connect-redis')(session);

export default (app) => {
  // enable CORS
  app.use(cors());

  // log all requests to the console
  app.use(morgan('dev'));

  // use body parser so we can grab information from POST requests
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser(SESSION_SECRET));

  app.use(compression());

  // TODO: store session by ReidsStore
  app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false/**/
  }));

  // passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(express.static(join(root, '/dist/client')));
  app.set('client', join(root, '/dist/client'));

  // Error handler - has to be last
  app.use(errorHandler());
}
