import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url="assets/mocks/gallery.json";

  constructor(private http:HttpClient) { }

  getAllPictures(): Observable<any>{
    return this.http.get(this.url);
  }
}
