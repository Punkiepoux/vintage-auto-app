import { AfterViewInit, Component } from '@angular/core';
import { PARTNERS } from './mock-partners';
import { Partners } from './partners';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent implements AfterViewInit{
  partnerList: Partners[] = PARTNERS;

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
