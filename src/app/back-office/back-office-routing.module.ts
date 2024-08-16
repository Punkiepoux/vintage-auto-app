import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPartnersComponent } from './partners/partners.component';
import { AdminPhotosComponent } from './photos/photos.component';
import { AdminServicesComponent } from './services/services.component';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  { path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'users', component: AdminComponent },
      { path: 'contact', component: AdminContactComponent },
      { path: 'partenaires', component: AdminPartnersComponent },
      { path: 'photos', component: AdminPhotosComponent },
      { path: 'services', component: AdminServicesComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
