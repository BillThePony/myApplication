import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  show = false;
  buttonName = "Show";

  User = {
    name: "Zak",
    firstName: "Hamichi",
    age: "J'ai 12 ans",
    quote: "",
    photo: "zakaria.jpg"
  };

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = "Hide";
    } else {
      this.buttonName = "Show";
    }
  }
}
