import { Component, OnInit } from "@angular/core";
import {
  faCalendar,
  faTasks,
  faLink,
  faBookmark,
  faQuestion,
  faCog,
  faSignOutAlt,
  faImages,
  faTags,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  links = {
    main: [
      {
        label: "Tasks",
        href: "/tasks",
        icon: faTasks
      },
      {
        label: "Combos",
        href: "/combos",
        icon: faLink
      },
      {
        label: "Journal",
        href: "/journal",
        icon: faCalendar
      },
      {
        label: "Gallery",
        href: "/gallery",
        icon: faImages
      },
      {
        label: "Tags",
        href: "/tags",
        icon: faTags
      },
      {
        label: "Locations",
        href: "/locations",
        icon: faMapMarkedAlt
      },
      {
        label: "Highlights",
        href: "/highlights",
        icon: faBookmark
      }
    ],
    utility: [
      {
        label: "Settings",
        href: "/settings",
        icon: faCog
      },
      {
        label: "Help",
        href: "/help",
        icon: faQuestion
      },
      {
        label: "Logout",
        href: "/logout",
        icon: faSignOutAlt
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
