import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) },
  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
