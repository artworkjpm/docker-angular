import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-city',
  templateUrl: './image-city.component.html',
  styleUrls: ['./image-city.component.scss'],
})
export class ImageCityComponent implements OnInit {
  @Input() title: any;
  @Input() urlpath: any;
  imageWidth: string = '150px';
  imageSmall: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  changeImageSize() {
    this.imageSmall = !this.imageSmall;
    this.imageSmall ? (this.imageWidth = '500px') : (this.imageWidth = '150px');
  }
}
