import { Component } from "@angular/core";
import { ArrozLibService } from "arroz-lib";

@Component({
  selector: "app-home",
  template: ` <p>home works!</p> `,
  styles: [],
})
export class HomeComponent {
  constructor(private arrozService: ArrozLibService) {
    console.log("LOGIN –", this.arrozService.login("arroz doce", "bãod+"));

    setTimeout(() => {
      console.log(
        "LOGIN –",
        this.arrozService.login("bolinho de arroz", "bãod+")
      );
    }, 4000);

    setTimeout(() => {
      console.log(
        "LOGIN –",
        this.arrozService.login("arroz carreteiro", "bãod+")
      );
    }, 8000);
  }
}
