import { Injectable } from '@angular/core';
import { Post } from '../models';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API: string = 'http://localhost:3000/api/v1/posts';
  postsArray: Array<object>;

  constructor(private http: HttpClient) {
    this.postsArray = [];
  }

  getPosts(): Subscription {
    return this.http
      .get<Post[]>(this.API)
      .pipe(take(1))
      .subscribe((items) => {
        console.log(items);
        this.postsArray = items;
      });
  }
  updatePosts(idToChange: number, newPost: Post): Subscription {
    console.log(idToChange, newPost);
    return this.http
      .put<Post[]>(`${this.API}/${idToChange}`, newPost)
      .pipe(take(1))
      .subscribe(() => {
        this.getPosts();
      });
  }
}
