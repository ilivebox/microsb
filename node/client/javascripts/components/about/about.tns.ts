import { Component } from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router/ns-router";

@Component({
  selector: "about",
  directives: [NS_ROUTER_DIRECTIVES],
  templateUrl: 'javascripts/components/about/about.tns.html',
  styleUrls: ['javascripts/components/about/about.tns.css']
})
export class About {

}
