import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { Post } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { ImageCityComponent } from './components/image-city/image-city.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TopNavComponent, GooglemapsComponent, ImageCityComponent],
})
export class AppComponent implements OnInit {
  title = 'docker-angular';
  posts: Post[] = [];
  displayedColumns: string[] = ['name', 'content', 'map', 'edit'];

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit() {
    this.apiService.getPosts();

    /*  let newPost = {
      content:
        'Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states. With a population of approximately 3.7 million, Berlin is the second...',
      created_at: '2020-04-24T11:43:34.069Z',
      id: 3,
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg/2560px-Aerial_view_of_Berlin_%2832881394137%29.jpg',
      lat: '52.5065133',
      long: '13.1445548',
      title: 'Berlin',
      updated_at: '2020-04-24T11:43:34.069Z',
    }; */

    /*  this.apiService.updatePosts(newPost).subscribe(() => {
      this.apiService.getPosts();
    }); */
  }
  openMap(lat: any, long: any) {
    this.dialog.open(DialogMapComponent, {
      data: { lat, long },
      minWidth: '100%',
      minHeight: '50%',
    });
  }
  editPost(editedPost: Post) {
    this.dialog.open(DialogEditComponent, {
      data: editedPost,
      minWidth: '50%',
    });
  }
}
