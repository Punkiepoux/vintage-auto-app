import { ApiPhotosService } from './../../services/api-photos.service';
import { Component, OnInit } from '@angular/core';
import { PHOTOS } from '../../website/photos/mock-photos';
import { Photos } from '../../website/photos/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class AdminPhotosComponent implements OnInit {
  photoList: Photos[] = PHOTOS;

  constructor(private apiPhotosService: ApiPhotosService) {}

  ngOnInit() {
    this.apiPhotosService.getPhotosInfo().subscribe((data: Photos[]) => {
      this.photoList = data;
    });
  }
}
