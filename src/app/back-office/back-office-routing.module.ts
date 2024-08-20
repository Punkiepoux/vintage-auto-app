import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPartnersComponent } from './partners/partners.component';
import { AdminPhotosComponent } from './photos/photos.component';
import { AdminServicesComponent } from './services/services.component';
import { BackOfficeComponent } from './back-office.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'users', component: AdminComponent, canActivate: [AuthGuard] },
      { path: 'contact', component: AdminContactComponent, canActivate: [AuthGuard] },
      { path: 'partenaires', component: AdminPartnersComponent, canActivate: [AuthGuard] },
      { path: 'photos', component: AdminPhotosComponent, canActivate: [AuthGuard] },
      { path: 'services', component: AdminServicesComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
