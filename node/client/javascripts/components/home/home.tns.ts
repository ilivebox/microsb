import { Component } from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router/ns-router";

@Component({
  selector: "home",
  directives: [NS_ROUTER_DIRECTIVES],
  templateUrl: 'javascripts/components/home/home.tns.html',
  styleUrls: ['javascripts/components/home/home.tns.css']
})
export class Home {
}
