import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPartnersComponent } from './partner/partner.component';
import { AdminPhotosComponent } from './photo/photo.component';
import { AdminBenefitComponent } from './benefit/benefit.component';
import { BackOfficeComponent } from './back-office.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminAddPartnerComponent } from './partner/add-partner.component';
import { AdminEditPartnerComponent } from './partner/edit-partner.component';
import { AdminAddBenefitComponent } from './benefit/add-benefit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'users', component: AdminComponent, canActivate: [AuthGuard] },
      { path: 'contact', component: AdminContactComponent, canActivate: [AuthGuard] },
      { path: 'partenaires', component: AdminPartnersComponent, canActivate: [AuthGuard] },
      { path: 'partenaire/ajouter', component: AdminAddPartnerComponent, canActivate: [AuthGuard] },
      { path: 'partenaire/:id', component: AdminEditPartnerComponent, canActivate: [AuthGuard] },
      { path: 'photos', component: AdminPhotosComponent, canActivate: [AuthGuard] },
      { path: 'services', component: AdminBenefitComponent, canActivate: [AuthGuard] },
      { path: 'service/ajouter', component: AdminAddBenefitComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
