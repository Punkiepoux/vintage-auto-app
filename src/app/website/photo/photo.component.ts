import { Component } from '@angular/core';
import { Photo } from './photo';
import { PHOTO } from './mock-photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  photoList: Photo[] = PHOTO;
}
