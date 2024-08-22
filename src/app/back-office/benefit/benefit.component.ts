import { Component, OnInit } from '@angular/core';
import { Benefit } from '../../website/benefit/benefit';
import { ApiBenefitService } from '../../services/api-benefit.service';

@Component({
  selector: 'app-admin-benefit',
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class AdminBenefitComponent implements OnInit {
  serviceList: Benefit[] = [];

  constructor(private apiBenefitService: ApiBenefitService) { }

  ngOnInit(): void {
    this.apiBenefitService.getServicesInfo().subscribe((data: Benefit[]) => {
      this.serviceList = data;
    });
  }
}
