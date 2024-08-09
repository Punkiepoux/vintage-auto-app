import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay, Navigation],

      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'slide',
      loop: true,
      simulateTouch: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  }
}
