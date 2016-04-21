import * as http from 'http';

import { createContainer } from './express';
import { enableSession } from  './session';
import { router } from './router';
import { IModule } from '../modules/IModule';

class microsb {
  private container;
  private server;
  private router;

  constructor() {
    this.container = createContainer();
    this.server = http.createServer(this.container);
    this.router = new router(this.container);
  }

  connectToDatabase() {
    return this;
  }

  enableSession() {
    return enableSession(this);
  }

  enablePassport() {
    return this;
  }

  enableSocketIO() {
    return this;
  }

  load(module: IModule) {
    this.router.push(module);
  }

  run() {
    this.router.build();
    this.server.listen(3000, () => console.log('Express server listening on %d, in %s mode', 3000, this.container.get('env')))
  };
}

export default new microsb();
