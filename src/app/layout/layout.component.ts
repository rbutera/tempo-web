import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  faHome,
  faCalendar,
  faTag,
  faBell
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent {
  links = [
    { name: "Feed", icon: faHome, href: "/" },
    { name: "Journal", icon: faCalendar, href: "/journal" },
    { name: "Tags", icon: faTag, href: "/tags" },
    { name: "Notifications", icon: faBell, href: "/notifications" }
  ];
  activeLink = this.links[0].name;

  setActive(name: string) {
    this.activeLink = name;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
}
