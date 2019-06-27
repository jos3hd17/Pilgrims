import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/generics/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  pictures;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getAllPictures().subscribe( pictures => {
      this.pictures = pictures;
    })
  }

}
