import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Loader } from '@googlemaps/js-api-loader';
import { googleMapsApi } from 'apikeys';

@Component({
  selector: 'app-dialog-map',
  templateUrl: './dialog-map.component.html',
  styleUrls: ['./dialog-map.component.scss'],
})
export class DialogMapComponent implements OnInit {
  loader = new Loader({
    apiKey: googleMapsApi,
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { lat: string; long: string }
  ) {}

  ngOnInit(): void {
    this.loader.load().then(() => {
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
