import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { PhotosComponent } from "./photos/photos.component";
import { ServicesComponent } from "./services/services.component";
import { PartnersComponent } from "./partners/partners.component";
import { ContactComponent } from "./contact/contact.component";
import { AdminComponent } from "./admin/admin.component";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PhotosComponent,
    ServicesComponent,
    PartnersComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
