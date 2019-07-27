import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = '';
  urlShort = 'assets/mocks/cards.json';
  urlAll = 'assets/mocks/cards-full.json';
  constructor(private http: HttpClient) { }

  getCards(all): Observable<any> {
    this.url = all ? this.urlAll : this.urlShort;
    return this.http.get(this.url);
  }

}
