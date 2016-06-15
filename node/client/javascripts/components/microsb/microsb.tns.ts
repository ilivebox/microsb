import { Component } from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import { Home } from "../home/home.tns";
import { About } from "../about/about.tns";

@Component({
  selector: "microsb",
  directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
  templateUrl: 'javascripts/components/microsb/microsb.tns.html',
  styleUrls: ['javascripts/components/microsb/microsb.tns.css']
})
@RouteConfig([
  { path: '/home', name: 'Home', component: Home,  useAsDefault: true },
  { path: '/about', name: 'About', component: About  },
])
export class NSAppComponent {
  public counter: number = 16;

  public get message(): string {
    if (this.counter > 0) {
      return this.counter + " taps left";
    } else {
      return "Hoorraaay! \nYou are ready to start building!";
    }
  }

  public onTap() {
    this.counter--;
  }
}
