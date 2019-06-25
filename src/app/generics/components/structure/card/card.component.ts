import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/generics/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  cards: any;
  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.getCards().subscribe(cards => {
      console.log(cards);
      
      this.cards = cards;
    })
  }

}
