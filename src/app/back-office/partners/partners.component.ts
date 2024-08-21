import { ApiPartnersService } from './../../services/api-partners.service';
import { Component, OnInit } from '@angular/core';
import { Partners } from './../../website/partners/partners';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class AdminPartnersComponent implements OnInit {
  partnersList: Partners[] = [];

  constructor(
    private apiPartnersService: ApiPartnersService,
  ) { }

  ngOnInit(): void {
    this.apiPartnersService.getPartnersInfo().subscribe((data: Partners[]) => {
      this.partnersList = data;
    });
  }

}
