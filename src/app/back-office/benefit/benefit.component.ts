import { Component, OnInit } from '@angular/core';
import { Benefit } from '../../website/benefit/benefit';
import { ApiBenefitService } from '../../services/api-benefit.service';

@Component({
  selector: 'app-admin-benefit',
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class AdminBenefitComponent implements OnInit {
  benefitList: Benefit[] = [];

  constructor(private apiBenefitService: ApiBenefitService) { }

  ngOnInit(): void {
    this.getBenefit();
  }

  getBenefit(): Benefit[] {
    this.apiBenefitService.getBenefitInfo().subscribe((data: Benefit[]) => {
      if(data.length > 0) {
        this.benefitList = data;
      }
    });
    return this.benefitList;
  }
}
