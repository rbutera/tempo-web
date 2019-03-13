import { Component, OnInit, Input } from "@angular/core";
import { post } from "selenium-webdriver/http";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post;

  constructor() {}

  onKeyDown(event) {
    console.debug("onKeyDown", event);
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  onKeyUp(event) {
    console.debug("onKeyUp", event);
  }

  onKeyPress(event) {
    console.debug("onKeyPress", event);
  }

  ngOnInit() {}
}
