import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {
  @Input() data: { lat: string; long: string } = { lat: '', long: '' };
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    console.log(parseFloat(this.data.lat), parseFloat(this.data.long));

    let loader = new Loader({
      apiKey: 'AIzaSyBh0mTqFD09A-jKgnpOw5_6mpL8qvGiOMA',
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
