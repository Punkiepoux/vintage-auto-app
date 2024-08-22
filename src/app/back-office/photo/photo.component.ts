import { ApiPhotoService } from '../../services/api-photo.service';
import { Component, OnInit } from '@angular/core';
import { PHOTO } from '../../website/photo/mock-photo';
import { Photo } from '../../website/photo/photo';

@Component({
  selector: 'app-admin-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class AdminPhotosComponent implements OnInit {
  photoList: Photo[] = PHOTO;

  constructor(private apiPhotoService: ApiPhotoService) {}

  ngOnInit() {
    this.apiPhotoService.getPhotoInfo().subscribe((data: Photo[]) => {
      this.photoList = data;
    });
  }
}
