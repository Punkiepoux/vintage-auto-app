import { ApiServicesService } from './../../services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  serviceList: Service[] = []

  constructor(private apiServicesService: ApiServicesService) { }

  ngOnInit(): void {
    this.apiServicesService.getServicesInfo().subscribe((services: Service[]) => {
      this.serviceList = services;
    });
  }
}
