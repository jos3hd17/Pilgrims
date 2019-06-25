import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = 'assets/mocks/cards.json';
  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(this.url);
  };
}
