import { Component } from '@angular/core';
import { PHOTOS } from '../../website/photos/mock-photos';
import { Photos } from '../../website/photos/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class AdminPhotosComponent {
  photoList: Photos[] = PHOTOS;
}
