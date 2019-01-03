import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: require("./app.component.html")
})
export class AppComponent {
  title = "Any other title";
  counter = 0;
  onClick() {
    this.counter += 1;
  }
}
