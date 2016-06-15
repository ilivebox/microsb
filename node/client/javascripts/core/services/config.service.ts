// angular
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";

interface IPlatforms {
  WEB: string;
  MOBILE_NATIVE: string;
  MOBILE_HYBRID: string;
  DESKTOP: string;
}

export class ConfigService {

  public static DEBUG: any = {
    LEVEL_1: false, // .info only
    LEVEL_2: false, // .warn only
    LEVEL_3: false, // .error only
    LEVEL_4: false  // .log + all the above
  };

  // allows runtime config of platform specific router directives
  public static ROUTER_DIRECTIVES: Array<any> = ROUTER_DIRECTIVES;

  // supported platforms
  public static PLATFORMS: IPlatforms = {
    WEB: 'web',
    MOBILE_NATIVE: 'mobile_native',
    MOBILE_HYBRID: 'mobile_hybrid',
    DESKTOP: 'desktop'
  };

  // current target (defaults to web)
  public static PLATFORM_TARGET: string = ConfigService.PLATFORMS.WEB;

  // convenient platform checks
  public static IS_WEB(): boolean {
    return ConfigService.PLATFORM_TARGET === ConfigService.PLATFORMS.WEB;
  }

  public static IS_MOBILE_NATIVE(): boolean {
    return ConfigService.PLATFORM_TARGET === ConfigService.PLATFORMS.MOBILE_NATIVE;
  }

  public static IS_MOBILE_HYBRID(): boolean {
    return ConfigService.PLATFORM_TARGET === ConfigService.PLATFORMS.MOBILE_HYBRID;
  }

  public static IS_DESKTOP(): boolean {
    return ConfigService.PLATFORM_TARGET === ConfigService.PLATFORMS.DESKTOP;
  }

  // NOTE: if any level is on, debug mode is on
  public static IS_DEBUG_MODE(): boolean {
    return Object.keys(ConfigService.DEBUG).some(key => ConfigService.DEBUG[key]);
  }

  // reset debug defaults
  public static RESET() {
    Object.keys(ConfigService.DEBUG).forEach(key => ConfigService.DEBUG[key] = false);
  }
}
