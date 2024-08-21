import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPhotosComponent } from './photos/photos.component';
import { AdminServicesComponent } from './services/services.component';
import { AdminPartnersComponent } from './partners/partners.component';
import { AdminContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminAddPartnerComponent } from './partners/add-partner.component';
import { AdminEditPartnerComponent } from './partners/edit-partner.component';
import { AdminAddServiceComponent } from './services/add-service.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
    AdminComponent,
    AdminPhotosComponent,
    AdminServicesComponent,
    AdminPartnersComponent,
    AdminContactComponent,
    LoginComponent,
    AdminAddPartnerComponent,
    AdminEditPartnerComponent,
    AdminAddServiceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BackOfficeRoutingModule,
  ],
})
export class BackOfficeModule { }
