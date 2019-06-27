import { Component, OnInit } from '@angular/core';
import { CarouselServiceService } from 'src/app/generics/services/carousel-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselServiceService]
})
export class CarouselComponent implements OnInit {
  slides: any;
  constructor(private service: CarouselServiceService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getSlides().subscribe(slides => {
      this.slides = slides;
    })
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

}
