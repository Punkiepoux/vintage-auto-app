import { Component } from "@angular/core";
import { ApiBenefitService } from "../../services/api-benefit.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class AdminAddBenefitComponent {
  constructor(private apiBenefitService: ApiBenefitService) { }

  addBenefit(addBenefitForm: NgForm): void {
    if (addBenefitForm.valid) {
      const benefit = addBenefitForm.value;
      console.log(benefit);
      this.apiBenefitService.addBenefit(benefit).subscribe((response: any) => {
        console.log(response);
      });
    } else {
      console.log('Formulaire invalide');
    }
  }
}
