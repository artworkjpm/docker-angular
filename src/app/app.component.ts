import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { Post } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TopNavComponent, GooglemapsComponent],
})
export class AppComponent implements OnInit {
  title = 'docker-angular';
  posts: Post[] = [];
  displayedColumns: string[] = ['name', 'content', 'map'];

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit() {
    this.apiService.getPosts().subscribe((items) => {
      console.log(items);
      this.posts = items;
    });
  }
  openMap(lat: any, long: any) {
    this.dialog.open(DialogMapComponent, {
      data: { lat, long },
    });
  }
}
