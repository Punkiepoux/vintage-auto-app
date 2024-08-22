import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPhotosComponent } from './photo/photo.component';
import { AdminBenefitComponent } from './benefit/benefit.component';
import { AdminPartnersComponent } from './partner/partner.component';
import { AdminContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminAddPartnerComponent } from './partner/add-partner.component';
import { AdminEditPartnerComponent } from './partner/edit-partner.component';
import { AdminAddBenefitComponent } from './benefit/add-benefit.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
    AdminComponent,
    AdminPhotosComponent,
    AdminBenefitComponent,
    AdminPartnersComponent,
    AdminContactComponent,
    LoginComponent,
    AdminAddPartnerComponent,
    AdminEditPartnerComponent,
    AdminAddBenefitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BackOfficeRoutingModule,
  ],
})
export class BackOfficeModule { }
