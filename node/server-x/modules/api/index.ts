import { IModule } from '../IModule';

class Api implements IModule {
  baseUrl: string = '/api';

  init(container): void {
    container.use(this.baseUrl, require('./profile').route('/profile'));
  }
}

export = new Api();
