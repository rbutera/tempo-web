import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PostComponent } from "./posts/post/post.component";
import { NavigationComponent } from "./menu/navigation/navigation.component";
import { MenuAccountInfoComponent } from "./menu/menu-account-info/menu-account-info.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostListComponent,
    AddPostComponent,
    PostComponent,
    NavigationComponent,
    MenuAccountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
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
