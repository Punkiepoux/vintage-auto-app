import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',
    component: WebsiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'services', component: ServicesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
