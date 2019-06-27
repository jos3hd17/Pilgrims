import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/generics/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {
  @Input() full: boolean;
  cards: any;
  constructor(private service: CardService) { }

  ngOnInit() {

    this.service.getCards(this.full).subscribe(cards => {
      this.cards = cards;
    })
  }

}
