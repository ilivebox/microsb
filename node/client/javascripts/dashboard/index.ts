import { Component, OnInit } from "angular2/core";
import { FORM_DIRECTIVES } from "angular2/common";

@Component({
  selector: 'dashboard',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  template: require('./dashboard.html')
})
export class Dashboard implements OnInit {
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Dashboard');
  }
}
