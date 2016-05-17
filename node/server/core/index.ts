import * as http from "http";
import { createContainer } from "./express";
import { enableSession } from "./session";
import { router } from "./router";
import { IModule } from "../modules/IModule";
import { port } from "../configs";

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
    this.server.listen(port, () => console.log('Express server listening on %d, in %s mode', port, this.container.get('env')))
  };
}

export default new microsb();
