import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselServiceService {
  url = 'assets/mocks/slides.json';
  constructor(private http: HttpClient) { }

  getSlides(): Observable<any> {
    return this.http.get(this.url);
  };
}
