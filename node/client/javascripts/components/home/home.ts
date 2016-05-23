import { Component } from "@angular/core";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home', // <home></home>
  directives: [],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class Home {
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }
}
