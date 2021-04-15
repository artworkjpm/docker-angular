import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { Post } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TopNavComponent],
})
export class AppComponent implements OnInit {
  title = 'docker-angular';
  posts = [Post];

  constructor(public apiService: ApiService, private router: Router) {}
  ngOnInit() {
    this.apiService.getPosts().subscribe((items) => {
      console.log(items);
    });
  }
}
