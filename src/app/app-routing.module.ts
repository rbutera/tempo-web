import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { DayPageComponent } from "./journal/day-page/day-page.component";
import { TagsPageComponent } from "./tags/tags-page/tags-page.component";
import { NotificationsPageComponent } from "./notifications-page/notifications-page.component";
import { TasksPageComponent } from "./tasks-page/tasks-page.component";
import { CombosPageComponent } from "./combos-page/combos-page.component";
import { GalleryPageComponent } from "./gallery-page/gallery-page.component";
import { LocationsPageComponent } from "./locations-page/locations-page.component";
import { HighlightsPageComponent } from "./highlights-page/highlights-page.component";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { HelpPageComponent } from "./help-page/help-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/feed",
    pathMatch: "full"
  },
  {
    path: "feed",
    component: HomePageComponent
  },
  {
    path: "journal",
    component: DayPageComponent
  },
  {
    path: "tags",
    component: TagsPageComponent
  },
  {
    path: "notifications",
    component: NotificationsPageComponent
  },
  {
    path: "tasks",
    component: TasksPageComponent
  },
  {
    path: "combos",
    component: CombosPageComponent
  },
  {
    path: "gallery",
    component: GalleryPageComponent
  },
  {
    path: "locations",
    component: LocationsPageComponent
  },
  {
    path: "highlights",
    component: HighlightsPageComponent
  },
  {
    path: "settings",
    component: SettingsPageComponent
  },
  {
    path: "help",
    component: HelpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
