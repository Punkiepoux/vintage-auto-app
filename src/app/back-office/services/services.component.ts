import { Component } from '@angular/core';
import { Service } from '../../website/services/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class AdminServicesComponent {
  serviceList: Service[] = [];
}
