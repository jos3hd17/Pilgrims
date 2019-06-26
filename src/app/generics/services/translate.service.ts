import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  lang = '';
  constructor() { }

  setDefaultLang() {
    this.lang = 'es';
  }

  changeLanguage( language) {
    this.lang = language
  }

  getLanguage(): string {
    return this.lang;
  }
}
