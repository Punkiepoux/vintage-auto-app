import { Component, OnInit } from '@angular/core';
import { Service } from '../../website/services/service';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class AdminServicesComponent implements OnInit {
  serviceList: Service[] = [];

  constructor(private apiServicesService: ApiServicesService) { }

  ngOnInit(): void {
    this.apiServicesService.getServicesInfo().subscribe((data: Service[]) => {
      this.serviceList = data;
    });
  }
}
