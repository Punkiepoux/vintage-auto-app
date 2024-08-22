import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PARTNER } from './mock-partner';
import { Partner } from './partner';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { ApiPartnerService } from '../../services/api-partner.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements OnInit,AfterViewInit {
  partnerList: Partner[] = PARTNER;

  constructor(private apiPartnerService: ApiPartnerService) { }

  ngOnInit(): void {
    this.apiPartnerService.getPartnerInfo().subscribe(data => {
      this.partnerList = data;
    });
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation],

      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'slide',
      loop: true,
      simulateTouch: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },

    });
  }
}
