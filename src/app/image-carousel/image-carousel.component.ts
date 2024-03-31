import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageComponent {
  images!: any[];

  constructor() {}

  ngOnInit() {
    this.images = [
      'assets/images/2.jpeg',
      'assets/images/3.jpeg',
      'assets/images/4.jpeg',
      'assets/images/5.jpeg',
    ];
  }
}
