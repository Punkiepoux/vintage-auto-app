import { ApiBenefitService } from '../../services/api-benefit.service';
import { Component, OnInit } from '@angular/core';
import { Benefit } from './benefit';
import { BENEFIT } from './mock-benefit';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class BenefitComponent implements OnInit {
  benefitList: Benefit[] = BENEFIT;

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
