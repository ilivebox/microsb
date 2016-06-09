import { join } from "path";
import { client } from "../configs/index";
import errors from "../components/errors";
import { IModule } from '../modules/IModule';

export class router extends Array<IModule> {
  private container;

  constructor(container) {
    super(container);
    this.container = container;
  }

  build() {
    this.forEach((module) => module.init(this.container));

    // All other routes should redirect to the index.html
    this.container.route('/:url(components|app)/*').get(errors[404]);
    this.container.route('/*').get((req, res) => res.sendFile(join(client, 'index.html')));
  }
}
