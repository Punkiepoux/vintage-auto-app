import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClubPhotoComponent } from './club-photo/club-photo.component';
import { ClubService } from './club.service';
import { ClubIndexComponent } from './club-index/club-index.component';


const clubRoutes: Routes = [
  { path: 'index', component: ClubIndexComponent },
  { path: 'photos', component: ClubPhotoComponent },
];


@NgModule({
  declarations: [
    ClubPhotoComponent,
    ClubIndexComponent,
   ],
  imports: [
    CommonModule,
    RouterModule.forChild(clubRoutes),
  ],
  providers: [ClubService],
})
export class ClubModule { }
