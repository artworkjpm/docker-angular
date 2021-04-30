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
  postsArray: Array<object> = [];

  constructor(public http: HttpClient) {}

  getPosts(): Subscription {
    return this.http
      .get<Post[]>(this.API)
      .pipe(take(1))
      .subscribe((items) => {
        this.postsArray = items;
      });
  }
  updatePosts(idToChange: number, edittedPost: Post): Subscription {
    return this.http
      .put<Post[]>(`${this.API}/${idToChange}`, edittedPost)
      .pipe(take(1))
      .subscribe(() => {
        this.getPosts();
      });
  }
  createNewPost(newPost: Post): Subscription {
    return this.http
      .post<Post[]>(`${this.API}`, newPost)
      .pipe(take(1))
      .subscribe(() => {
        this.getPosts();
      });
  }

  removePost(idToRemove: number): Subscription {
    return this.http
      .delete<Post[]>(`${this.API}/${idToRemove}`)
      .pipe(take(1))
      .subscribe(() => {
        this.getPosts();
      });
  }
}
