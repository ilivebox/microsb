// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { nativeScriptBootstrap } from "nativescript-angular/application";
import { NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import { NSAppComponent } from "./page/components/microsb";

nativeScriptBootstrap(NSAppComponent, [NS_ROUTER_PROVIDERS]);
