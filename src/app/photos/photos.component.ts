import { Component } from '@angular/core';
import { Photos } from './photos';
import { PHOTOS } from './mock-photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  photoList: Photos[] = PHOTOS;
}
