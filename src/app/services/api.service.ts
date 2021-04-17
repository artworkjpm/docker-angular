import { Injectable } from '@angular/core';
import { Post } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API: string = 'http://localhost:3000/api/v1/posts';
  postsArray: Array<object>;

  constructor(private http: HttpClient) {
    this.postsArray = [];
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API);
  }
  updatePosts(newPost: Post): Observable<Post[]> {
    return this.http.put<Post[]>(
      'http://localhost:3000/api/v1/posts/3',
      newPost
    );
  }
}
