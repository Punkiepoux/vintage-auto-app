import { ApiPartnerService } from '../../services/api-partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from '../../website/partner/partner';

@Component({
  selector: 'app-partners',
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class AdminPartnersComponent implements OnInit {
  partnersList: Partner[] = [];

  constructor(
    private apiPartnerService: ApiPartnerService,
  ) { }

  ngOnInit(): void {
    this.apiPartnerService.getPartnerInfo().subscribe((data: Partner[]) => {
      this.partnersList = data;
    });
  }

}
