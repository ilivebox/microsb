// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import microsb from './core';

// microsb.connectToDatabase();
// microsb.enableSession();
// microsb.enablePassport();
// microsb.enableSocketIO();

microsb.load(require('./modules/api'));

microsb.run();
