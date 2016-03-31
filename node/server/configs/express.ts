import * as morgan from 'morgan';
import * as express from 'express';
import * as compression from 'compression';
import * as errorHandler from 'errorhandler';
import { join } from "path";
import { root } from "./index";

export default (app) => {
  app.use(compression());
  app.use(express.static(join(root, '/dist/client')));
  app.set('client', join(root, '/dist/client'));
  app.use(morgan('dev'));
  app.use(errorHandler()); // Error handler - has to be last
}
