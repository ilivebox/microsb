
import { NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

// config
import {ConfigService} from '../../../javascripts/core/index';
ConfigService.PLATFORM_TARGET = ConfigService.PLATFORMS.MOBILE_NATIVE;
ConfigService.DEBUG.LEVEL_4 = true;
ConfigService.ROUTER_DIRECTIVES = NS_ROUTER_DIRECTIVES;

export * from '../../../javascripts/components/microsb/microsb.tns';
