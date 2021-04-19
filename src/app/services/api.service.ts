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
  updatePosts(idToChange: number, edittedPost: Post): Subscription {
    console.log(idToChange, edittedPost);
    return this.http
      .put<Post[]>(`${this.API}/${idToChange}`, edittedPost)
      .pipe(take(1))
      .subscribe(() => {
        this.getPosts();
      });
  }
  createNewPost(newPost: Post): Subscription {
    console.log(newPost);
    return this.http
      .post<Post[]>(`${this.API}`, newPost)
      .pipe(take(1))
      .subscribe(() => {
        this.getPosts();
      });
  }
}
