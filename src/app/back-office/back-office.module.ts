import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPhotosComponent } from './photos/photos.component';
import { AdminServicesComponent } from './services/services.component';
import { AdminPartnersComponent } from './partners/partners.component';
import { AdminContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    BackOfficeComponent,
    AdminComponent,
    AdminPhotosComponent,
    AdminServicesComponent,
    AdminPartnersComponent,
    AdminContactComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
