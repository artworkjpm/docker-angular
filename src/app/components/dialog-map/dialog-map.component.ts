import { Component, OnInit, Inject } from '@angular/core';
import { GooglemapsComponent } from '../googlemaps/googlemaps.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-map',
  templateUrl: './dialog-map.component.html',
  styleUrls: ['./dialog-map.component.scss'],
  providers: [GooglemapsComponent],
})
export class DialogMapComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { lat: string; long: string }
  ) {}

  ngOnInit(): void {}
}
