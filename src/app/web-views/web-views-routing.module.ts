import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BriefComponent } from './components/home-page/brief/brief.component';
import { GalleryComponent } from './components/home-page/gallery/gallery.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { PlansComponent } from './components/home-page/plans/plans.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent,
    children: [
      {
        path: 'brief',
        component: BriefComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'plans',
        component: PlansComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/brief',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebViewsRoutingModule { }
