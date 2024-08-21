import { ApiPartnersService } from './../../services/api-partners.service';
import { Component, OnInit } from '@angular/core';
import { Partners } from './../../website/partners/partners';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class AdminPartnersComponent implements OnInit {
  partnersList: Partners[] = [];

  constructor(
    private apiPartnersService: ApiPartnersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiPartnersService.getPartnersInfo().subscribe((data: Partners[]) => {
      this.partnersList = data;
    });
  }

}
