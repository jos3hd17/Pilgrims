import { Component, OnInit } from '@angular/core';
import { CarouselServiceService } from 'src/app/generics/services/carousel-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselServiceService]
})
export class CarouselComponent implements OnInit {
  slides: any;
  constructor(private service: CarouselServiceService) { }

  ngOnInit() {
    this.service.getSlides().subscribe(slides => {
      this.slides = slides;
    })
  }

}
