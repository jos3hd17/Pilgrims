import { Component, OnInit } from '@angular/core';
import { TranslateService as Service } from '../../../services/translate.service';

import { TranslateService  } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: Service, private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang(translateService.getLanguage());
   }

  ngOnInit() {
  }

  changeLang(lang) {
    this.translateService.changeLanguage(lang);
    this.translate.use(this.translateService.getLanguage());
  }

  goTo( route ) {
    this.router.navigate( [`home/${route}`] );
  }

}
