import * as morgan from 'morgan';
import * as express from 'express';
import * as compression from 'compression';
import * as errorHandler from 'errorhandler';
import * as methodOverride from 'method-override';

import { join } from "path";
import { root, client } from "../configs/index";

import { urlencoded, json } from 'body-parser';

const container = express();
const staticPath = join(root, client);

container.use(express.static(staticPath));
container.use(methodOverride());
container.use(compression());
container.use(morgan('dev'));

container.use(urlencoded({ extended: true }));
container.use(json());

if ('development' == process.env.NODE_ENV) container.use(errorHandler());

export const createContainer = () => container;
