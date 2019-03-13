import { Component, OnInit, Input } from "@angular/core";

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
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      event.target.blur();
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
