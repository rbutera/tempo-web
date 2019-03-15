import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule
} from "@angular/material";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PostComponent } from "./posts/post/post.component";
import { NavigationComponent } from "./menu/navigation/navigation.component";
import { MenuAccountInfoComponent } from "./menu/menu-account-info/menu-account-info.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { DayPageComponent } from "./journal/day-page/day-page.component";
import { WeekPageComponent } from "./journal/week-page/week-page.component";
import { MonthPageComponent } from "./journal/month-page/month-page.component";
import { YearPageComponent } from "./journal/year-page/year-page.component";
import { TagsPageComponent } from "./tags/tags-page/tags-page.component";
import { TagDetailPageComponent } from "./tags/tag-detail-page/tag-detail-page.component";
import { NotificationsPageComponent } from "./notifications-page/notifications-page.component";
import { TasksPageComponent } from "./tasks-page/tasks-page.component";
import { CombosPageComponent } from "./combos-page/combos-page.component";
import { GalleryPageComponent } from "./gallery-page/gallery-page.component";
import { LocationsPageComponent } from "./locations-page/locations-page.component";
import { LocationDetailPageComponent } from "./location-detail-page/location-detail-page.component";
import { HighlightsPageComponent } from "./highlights-page/highlights-page.component";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { HelpPageComponent } from "./help-page/help-page.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostListComponent,
    AddPostComponent,
    PostComponent,
    NavigationComponent,
    MenuAccountInfoComponent,
    HomePageComponent,
    DayPageComponent,
    WeekPageComponent,
    MonthPageComponent,
    YearPageComponent,
    TagsPageComponent,
    TagDetailPageComponent,
    NotificationsPageComponent,
    TasksPageComponent,
    CombosPageComponent,
    GalleryPageComponent,
    LocationsPageComponent,
    LocationDetailPageComponent,
    HighlightsPageComponent,
    SettingsPageComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
