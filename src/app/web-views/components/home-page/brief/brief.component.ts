import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss']
})
export class BriefComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo( route ) {
    this.router.navigate( [`home/${route}`] )
  }

}
