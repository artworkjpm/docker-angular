import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { googlemapsapi } from 'apikeys';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {
  @Input() data: { lat: string; long: string } = { lat: '', long: '' };
  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: googlemapsapi,
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: {
          lat: parseFloat(this.data.lat),
          lng: parseFloat(this.data.long),
        },
        zoom: 10,
      });
    });
  }
}
