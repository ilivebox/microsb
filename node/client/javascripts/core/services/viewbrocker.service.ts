import { ConfigService } from "./config.service";

export class ViewBrokerService {

  public static TEMPLATE_URL(path: string): string {
    if (ConfigService.IS_MOBILE_NATIVE()) {
      let paths = path.split('.');
      paths.splice(-1);
      return `${paths.join('.')}.tns.html`;
    } else {
      return path;
    }
  }
}
