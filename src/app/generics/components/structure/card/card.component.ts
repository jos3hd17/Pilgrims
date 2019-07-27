import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/generics/services/card.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {
  @Input() full: boolean;
  cards: any;
  constructor(private service: CardService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getCards(this.full).subscribe(cards => {
      this.cards = cards;
    });
  }

  openModal(card) {
    const modalRef = this.modalService.open(ModalDetailComponent);
    modalRef.componentInstance.service = card;
  }

}
