import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";
import { startsWith, forEach } from "rambda";
import {
  faHome,
  faCalendar,
  faTag,
  faBell
} from "@fortawesome/free-solid-svg-icons";

import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent {
  currentUrlSubscription: Subscription;
  currentUrl: string;
  links: Link[] = [
    { name: "Feed", icon: faHome, href: "/feed" },
    { name: "Journal", icon: faCalendar, href: "/journal" },
    { name: "Tags", icon: faTag, href: "/tags" },
    { name: "Notifications", icon: faBell, href: "/notifications" }
  ];

  activeTab: string | null;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.currentUrlSubscription = router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // console.debug("currentUrl:", event);
        this.currentUrl = event.urlAfterRedirects || event.url;
        console.debug(`finished navigating to '${this.currentUrl}'`);
        this.getActiveTab();
      });
  }

  ngOnDestroy() {
    this.currentUrlSubscription.unsubscribe();
  }

  getActiveTab() {
    const tabPaths = this.links.map(link => link.href);
    let current: string;
    forEach(path => {
      if (startsWith(this.currentUrl)(path)) {
        current = path;
      }
    }, tabPaths);

    this.activeTab = current;
    console.debug(`activeTab is now '${this.activeTab}'`);
  }
}

interface Link {
  name: string;
  icon: any;
  href: string;
}
