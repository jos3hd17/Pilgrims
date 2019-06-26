import { Component } from '@angular/core';
import { TranslateService } from './generics/services/translate.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  providers: [TranslateService]
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang();
  }


}
