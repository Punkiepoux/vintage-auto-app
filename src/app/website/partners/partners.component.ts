import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PARTNERS } from './mock-partners';
import { Partners } from './partners';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { ApiPartnersService } from '../../services/api-partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent implements OnInit,AfterViewInit {
  partnerList: Partners[] = PARTNERS;

  constructor(private apiPartnersService: ApiPartnersService) { }

  ngOnInit(): void {
    this.apiPartnersService.getPartnersInfo().subscribe(data => {
      this.partnerList = data;
    });
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation],

      slidesPerView: 1,
      spaceBetween: 10,
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
          spaceBetween: 10
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      },

    });
  }
}
