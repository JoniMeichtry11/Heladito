import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreService } from '@core/services/explore.service';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  slides: Array<{ title: string; src: string; url: string }> = [
    {
      title: 'Arte',
      src: '../../../../../assets/img/film.svg',
      url: 'art',
    },
    {
      title: 'Blog',
      src: '../../../../../assets/img/blog.svg',
      url: 'blog',
    },
    {
      title: 'Artesanias',
      src: '../../../../../assets/img/craft.svg',
      url: 'craft',
    },
    {
      title: 'Ciencia y tecnología',
      src: '../../../../../assets/img/science.svg',
      url: 'science',
    },
    {
      title: 'Comics',
      src: '../../../../../assets/img/comic.svg',
      url: 'comics',
    },
    {
      title: 'Comida y bebida',
      src: '../../../../../assets/img/food.svg',
      url: 'food',
    },
    {
      title: 'Cosplay',
      src: '../../../../../assets/img/cosplay.svg',
      url: 'cosplay',
    },
    {
      title: 'Comunidades',
      src: '../../../../../assets/img/community.svg',
      url: 'community',
    },
    {
      title: 'Deportes',
      src: '../../../../../assets/img/sport.svg',
      url: 'sport',
    },
    {
      title: 'Dinero',
      src: '../../../../../assets/img/money.svg',
      url: 'money',
    },
    {
      title: 'Diseño',
      src: '../../../../../assets/img/design.svg',
      url: 'design',
    },
    {
      title: 'Educación',
      src: '../../../../../assets/img/education.svg',
      url: 'education',
    },
    {
      title: 'Escritura y literatura',
      src: '../../../../../assets/img/writing.svg',
      url: 'writing',
    },
    {
      title: 'Estilo de vida',
      src: '../../../../../assets/img/lifestyle.svg',
      url: 'lifestyle',
    },
    {
      title: 'Fotografía',
      src: '../../../../../assets/img/photography.svg',
      url: 'photography',
    },
    {
      title: 'Hardware',
      src: '../../../../../assets/img/hardware.svg',
      url: 'hardware',
    },
    {
      title: 'Juegos',
      src: '../../../../../assets/img/games.svg',
      url: 'games',
    },
    {
      title: 'Moda',
      src: '../../../../../assets/img/fashion.svg',
      url: 'fashion',
    },
    {
      title: 'Música',
      src: '../../../../../assets/img/music.svg',
      url: 'music',
    },
    {
      title: 'Negocios y locales',
      src: '../../../../../assets/img/business.svg',
      url: 'business',
    },
    {
      title: 'Noticias',
      src: '../../../../../assets/img/news.svg',
      url: 'news',
    },
    {
      title: 'ONG',
      src: '../../../../../assets/img/ong.svg',
      url: 'ong',
    },
    {
      title: 'Otros',
      src: '../../../../../assets/img/other.svg',
      url: 'other',
    },
    {
      title: 'Películas y series',
      src: '../../../../../assets/img/movies.svg',
      url: 'movies',
    },
    {
      title: 'Periodismo',
      src: '../../../../../assets/img/journalism.svg',
      url: 'journalism',
    },
    {
      title: 'Pintura y dibujo',
      src: '../../../../../assets/img/paint.svg',
      url: 'paint',
    },
    {
      title: 'Podcast',
      src: '../../../../../assets/img/podcast.svg',
      url: 'podcast',
    },
    {
      title: 'Redes sociales',
      src: '../../../../../assets/img/socialnetwork.svg',
      url: 'socialnetwork',
    },
    {
      title: 'Salud y bienestar',
      src: '../../../../../assets/img/healthy.svg',
      url: 'healthy',
    },
    {
      title: 'Software',
      src: '../../../../../assets/img/software.svg',
      url: 'software',
    },
    {
      title: 'Streaming',
      src: '../../../../../assets/img/streaming.svg',
      url: 'streaming',
    },
    {
      title: 'Teatro',
      src: '../../../../../assets/img/theather.svg',
      url: 'theather',
    },
  ];
  constructor(private router: Router, private exploreService: ExploreService) {}

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 6,
      },
      1280: {
        slidesPerView: 15,
      },
    },
    navigation: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true,
    },
    injectStyles: [
      `
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
        }
    `,
    ],
  };

  selectCategory(title: string, url: string) {
    this.exploreService.setTitleCategory(title);
    const fullUrl = 'explore' + '/' + url;
    this.router.navigate([fullUrl]);
  }
}
