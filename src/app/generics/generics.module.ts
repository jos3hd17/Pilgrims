import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/structure/header/header.component';
import { CarouselComponent } from './components/structure/carousel/carousel.component';
import { CardComponent } from './components/structure/card/card.component';
import { PictureComponent } from './components/structure/picture/picture.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MapComponent } from './components/addons/map/map.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [HeaderComponent, CarouselComponent, CardComponent, PictureComponent, MapComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARUbJSBRqrKD6KSj3N9zvwiocKnB-AnvM'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    CardComponent,
    PictureComponent,
    MapComponent
  ]
})
export class GenericsModule { }
