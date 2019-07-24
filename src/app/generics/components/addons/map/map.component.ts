import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  lat = 6.2590599;
  lng = -75.1444888;
  constructor() { }

  ngOnInit() {
  }

}
