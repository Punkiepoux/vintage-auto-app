import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  serviceList: Service[] = []

  constructor() { }
}
