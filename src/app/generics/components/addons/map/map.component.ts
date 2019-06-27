import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 6.246206;
  lng: number = -75.148547;
  constructor() { }

  ngOnInit() {
  }

}
