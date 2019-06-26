import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebViewsRoutingModule } from './web-views-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BriefComponent } from './components/home-page/brief/brief.component';
import { GalleryComponent } from './components/home-page/gallery/gallery.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { GenericsModule } from '../generics/generics.module';
import { PlansComponent } from './components/home-page/plans/plans.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [HomePageComponent, BriefComponent, GalleryComponent, ContactComponent, PlansComponent],
  imports: [
    CommonModule,
    WebViewsRoutingModule,
    GenericsModule,
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
  ]
})
export class WebViewsModule { }
