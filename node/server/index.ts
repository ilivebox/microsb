// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import * as http from 'http';
import * as express from 'express';
import { port } from './configs';

import initExpress from './configs/express';
import initRoutes from './routes';

// Setup server
const app = express();

// Express configuration
initExpress(app);
// Route configuration
initRoutes(app);

// Start server
http.createServer(app).listen(port, () => {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// Expose app
export = app;
