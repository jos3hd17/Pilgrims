import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebViewsRoutingModule } from './web-views-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BriefComponent } from './components/home-page/brief/brief.component';
import { GalleryComponent } from './components/home-page/gallery/gallery.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { GenericsModule } from '../generics/generics.module';

@NgModule({
  declarations: [HomePageComponent, BriefComponent, GalleryComponent, ContactComponent],
  imports: [
    CommonModule,
    WebViewsRoutingModule,
    GenericsModule
  ]
})
export class WebViewsModule { }
